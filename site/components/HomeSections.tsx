import { LocaleProvider, type Locale } from '../lib/i18n';
import { ComplexCharts } from './ComplexCharts';
import { LinkCharts } from './LinkCharts';
import { ProjectCard } from './ProjectCard';
import { FamousPersons } from './FamousPersons';

export default function HomeSections({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <ComplexCharts />
      <LinkCharts />
      <ProjectCard />
      <FamousPersons />
    </LocaleProvider>
  );
}
