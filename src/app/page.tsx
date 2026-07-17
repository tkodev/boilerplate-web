import { Main } from '@/components/templates/main'
import { Section } from '@/components/templates/section'
import { appdata } from '@/constants/system'
import { createMetadata } from '@/utils/system'

const metadata = createMetadata({
  title: appdata.title,
  description: appdata.description,
  path: '/'
})

const styles = {
  content: 'flex h-full flex-col items-center justify-center gap-md text-center',
  title: 'text-4xl font-bold',
  desc: 'text-muted-foreground'
}

const HomePage = () => {
  // jsx
  return (
    <Main>
      <Section id="intro">
        <div className={styles.content}>
          <h1 className={styles.title}>{appdata.title}</h1>
          <p className={styles.desc}>{appdata.description}</p>
        </div>
      </Section>
    </Main>
  )
}

export default HomePage
export { metadata }
