import Layout from "pages/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import ResourceForm from "components/ResourceForm";

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = async (formData) => {
    try {
      await axios.post("/api/resources", formData);
      router.push("/");
    } catch (err) {
      alert(err?.response?.data || "Failed to create resource.");
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onFormSubmit={createResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
