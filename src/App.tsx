import { lazy, Suspense, useCallback, useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { viewerProfiles, type ProfileId, type Project, type SectionId } from './data/portfolio';
import { SmoothScrollProvider, useSmoothScroll } from './hooks/smoothScroll';
import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import ProfileSelector from './components/ProfileSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';

// Overlays are only needed on demand — split them out of the first load.
const PlayIntro = lazy(() => import('./components/PlayIntro'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

type Stage = 'opening' | 'profiles' | 'home';

const STORAGE_KEY = 'aditi-portfolio-profile';

function readStoredProfile(): ProfileId | null {
  try {
    const v = sessionStorage.getItem(STORAGE_KEY);
    return viewerProfiles.some((p) => p.id === v) ? (v as ProfileId) : null;
  } catch {
    return null;
  }
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const stored = readStoredProfile();
  const [stage, setStage] = useState<Stage>(stored ? 'home' : 'opening');
  const [profileId, setProfileId] = useState<ProfileId>(stored ?? 'aditi');
  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const { scrollTo, lock, unlock } = useSmoothScroll();

  useEffect(() => {
    const svgData = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='50%25' stop-color='%236366f1'/%3E%3Cstop offset='100%25' stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23818cf8'/%3E%3Cstop offset='100%25' stop-color='%2338bdf8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='64' height='64' rx='16' fill='%23070919'/%3E%3Crect width='62' height='62' x='1' y='1' rx='15' fill='none' stroke='%2338bdf8' stroke-opacity='0.35' stroke-width='1.5'/%3E%3Cpath d='M32 11 L14 53' stroke='url(%23g)' stroke-width='7' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M32 11 L50 53' stroke='url(%23g)' stroke-width='7' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21 38 L43 38' stroke='url(%23b)' stroke-width='6' stroke-linecap='round'/%3E%3C/svg%3E";
    const links = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
    links.forEach((l) => (l.href = svgData));
  }, []);

  const order = viewerProfiles.find((p) => p.id === profileId)!.order;

  useEffect(() => {
    if (stage === 'home') return;
    lock();
    return unlock;
  }, [stage, lock, unlock]);

  const pickProfile = useCallback(
    (id: ProfileId) => {
      setProfileId(id);
      try {
        sessionStorage.setItem(STORAGE_KEY, id);
      } catch {
        /* storage unavailable — profile simply won't persist */
      }
      if (stage !== 'home') {
        window.scrollTo(0, 0);
        setStage('home');
      } else {
        const p = viewerProfiles.find((v) => v.id === id)!;
        setToast(`Now watching as ${p.name} — ${p.blurb.toLowerCase()}`);
        scrollTo(0, { offset: 0 });
      }
    },
    [stage, scrollTo],
  );

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  const closeIntro = useCallback(() => setPlaying(false), []);
  const closeProject = useCallback(() => setProject(null), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  const sections: Record<SectionId, ReactNode> = {
    about: <About />,
    journey: <Seasons />,
    originals: <Originals onOpen={setProject} />,
    picks: <TopPicks />,
    skills: <Skills />,
    moments: <Achievements />,
    story: <ResumeSection onView={() => setResumeOpen(true)} />,
  };

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden />
      <CustomCursor />

      <AnimatePresence>
        {stage === 'opening' && <OpeningSequence key="opening" onDone={() => setStage('profiles')} />}
        {stage === 'profiles' && <ProfileSelector key="profiles" onPick={pickProfile} />}
      </AnimatePresence>

      {stage === 'home' && (
        <motion.div initial={{ opacity: 0, scale: 1.03, filter: 'blur(10px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1, ease: EASE }}>
          <Navbar order={order} profileId={profileId} onSwitch={pickProfile} />
          <main>
            <Hero key={`hero-${profileId}`} onPlay={() => setPlaying(true)} onResume={() => setResumeOpen(true)} profileId={profileId} />
            <ContinueWatching order={order} />
            {order.map((id) => (
              <Scene key={id} id={id} className={id === 'originals' ? '!py-0 sm:!py-0' : ''}>
                {sections[id]}
              </Scene>
            ))}
            <FinalCTA onReplay={() => setStage('opening')} />
          </main>
        </motion.div>
      )}

      <Suspense fallback={null}>
        <AnimatePresence>{playing && <PlayIntro key="intro" onClose={closeIntro} />}</AnimatePresence>
        <AnimatePresence>{project && <ProjectModal key="project" project={project} onClose={closeProject} onSwitch={setProject} />}</AnimatePresence>
        <AnimatePresence>{resumeOpen && <ResumeModal key="resume" onClose={closeResume} />}</AnimatePresence>
      </Suspense>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
