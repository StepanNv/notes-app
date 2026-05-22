import { LandingPage } from '../pages/LandingPage/index';
import { NotesPage } from '../pages/NotesPage/index';
import { ArchivePage } from '../pages/ArchivePage/index';
import { TrashPage } from '../pages/TrashPage/index';
import { SearchPage } from '../pages/SearchPage/index';
import { SignInPage } from '../pages/SignInPage/index';
import { SignUpPage } from '../pages/SignUpPage/index';

export const privateRoutes = [
  { path: '/notes', element: <NotesPage /> },
  { path: '/archive', element: <ArchivePage /> },
  { path: '/trash', element: <TrashPage /> },
  //   { path: '/note/:{id}', element: <NotePage /> },
  { path: `/search`, element: <SearchPage /> },
];

export const publicRoutes = [
  { path: '/', element: <LandingPage /> },
  { path: '/sign-in', element: <SignInPage /> },
  { path: '/sign-up', element: <SignUpPage /> },
];
