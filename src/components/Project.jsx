import * as projects from '../assets';

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  return (
    <div className="container mx-auto p-3 col-md-6 col-lg-4 d-flex justify-content-center">
      <div className="mx-auto">
        <img
          src={projects[image]}
          alt={name}
          className="p-img img-fluid"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
        <div className="mt-3">
          <h1>
            <a href={link} style={{ fontSize: '1.5rem', color: 'white' }}>
              {name}
            </a>{' '}
            <a href={repo}>
              <i className="fab fa-github"></i>
            </a>
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
