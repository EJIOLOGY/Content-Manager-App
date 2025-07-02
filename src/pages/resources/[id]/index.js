import Layout from "pages/Layout";
import Link from "next/link";
import axios from "axios";
import ResourceLabel from "components/ResourceLabel";
const ResourceDetail = ({ resource }) => {
  const activateResource = async () => {
    try {
      await axios.patch(`/api/resources/${resource.id}`, {
        ...resource,
        status: "active",
      });
      location.reload();
    } catch (error) {
      alert("Failed to activate. Another resource might already be active.");
    }
  };

  return (
    <Layout>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {resource.createdAt}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    {resource.status === "inactive" && (
                      <>
                        <Link
                          href={`/resources/${resource.id}/edit`}
                          className="button is-warning"
                        >
                          Update
                        </Link>
                        <button
                          className="button is-success ml-1"
                          onClick={activateResource}
                        >
                          Activate
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const dataRes = await fetch(
      `${process.env.API_URL}/resources/${params.id}`
    );
    if (!dataRes.ok) {
      return { notFound: true };
    }
    const data = await dataRes.json();
    return {
      props: {
        resource: data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default ResourceDetail;
