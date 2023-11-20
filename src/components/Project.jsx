import * as projects from '../assets';

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  return (
    <div className="p-3 col-md-6 col-lg-4">
      <img
        src={projects[image]}
        alt={name}
        className="p-img img-fluid"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
      <div className="mt-3">
        <h1>
          <a href={link} style={{ fontSize: '1.5rem' }}>
            {name}
          </a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h1>
        <p style={{ width: '100%' }}>{description}</p>
      </div>
    </div>
  );
}

export default Project;
