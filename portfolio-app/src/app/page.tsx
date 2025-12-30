import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ignoreListAnonymousStackFramesIfSandwiched } from 'next/dist/next-devtools/server/shared';
import LinkTree from '@/components/LinkTree';

export default function RootPage() {

  // Cause static-site so redirect to locale
  redirect(`/${routing.defaultLocale}`);

  // Temp redirect
  // redirect(`/${"/en/linktree"}`);
}