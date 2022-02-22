import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'renanflix',
  description: 'A React project creating Netflix interface with custom content',
  link: 'https://github.com/renanvcb/renanflix',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}