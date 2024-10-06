import { ErrorCard } from '@/components/error-card'
import { Shell } from '@/components/shells/shell'

export default function PageNotFound() {
  return (
    <Shell variant="centered" className="mx-auto flex h-screen max-w-md items-center justify-center">
      <ErrorCard
        title="Page not found"
        description="The page you are looking for does not exist, or this website does not support the selected language."
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  )
}
