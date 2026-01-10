import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
// import LinkTree from '@/components/LinkTree';

export default function RootPage() {

  // console.log("here")
  
  // Cause static-site so redirect to locale
  redirect(`/${routing.defaultLocale}`);

  // Temp redirect
  // redirect(`/${"/en/linktree"}`);
}