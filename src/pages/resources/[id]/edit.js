import Layout from "pages/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";

const ResourceEdit = ({ resource }) => {
  const updateResource = async (formData) => {
    try {
      await axios.patch(`/api/resources/${resource.id}`, formData);
      alert("Data has been updated!");
    } catch (err) {
      alert(err?.response?.data || "Update failed.");
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm
              initialData={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
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
    console.error("Error fetching resource:", error);
    return { notFound: true };
  }
}

export default ResourceEdit;
