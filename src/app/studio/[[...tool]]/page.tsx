/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'
import RevalidateModal from './_components/revalidate-modal'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return (
    <main className="relative flex flex-col md:flex-row">
      <div className="absolute bottom-2 left-2 z-[100001]">
        <RevalidateModal />
      </div>
      <div className="flex-1">
        <NextStudio config={config} />
      </div>
    </main>
  )
}
