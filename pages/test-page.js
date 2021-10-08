import { Client } from "../utils/prismicHelpers";
import { SliceZone } from "../components/SlicesHome";

const TestPage = ({ doc }) => {
  // console.log(doc);
  if (!Boolean(doc) || !Boolean(doc.data)) return;
  return (
    <div>
      <SliceZone sliceZone={doc.data.body} />
    </div>
  );
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();

  const doc =
    (await client.getByUID(
      "landing_page",
      "test-page",
      ref ? { ref } : null
    )) || {};

  return {
    props: {
      doc,
    },
  };
}

export default TestPage;
