import '../globals.css';

import { Metadata } from 'next';
import { VisualEditing, toPlainText } from 'next-sanity';
import { Inter } from 'next/font/google';
import { draftMode } from 'next/headers';

import AlertBanner from './alert-banner';

import * as demo from '@/sanity/lib/demo';
import { sanityFetch } from '@/sanity/lib/fetch';
import { SettingsQueryResponse, settingsQuery } from '@/sanity/lib/queries';
import { resolveOpenGraphImage } from '@/sanity/lib/utils';
import Navbar from '../components/Navbar';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} bg-soft-cream text-black`}>
      <body>
        <section className="min-h-screen">
          {draftMode().isEnabled && <AlertBanner />}
          <main>
            <Navbar />
            {children}
          </main>
        </section>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
