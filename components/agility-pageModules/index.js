import RichTextArea from "./RichTextArea";
//import FeaturedPost from "./FeaturedPost";
//import PostsListing from "./PostsListing";
//import PostDetails from "./PostDetails";
import Heading from "./Heading";
import TextBlockWithImage from "./TextBlockWithImage";
import UnsubscribeFrontPage from "./UnsubscribeFrontPage";
import UnsubscribeCompletePage from "./UnsubscribeCompletePage";
import Logos from "./Logos";
// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "TextBlockWithImage", module: TextBlockWithImage },
  { name: "Heading", module: Heading },
  { name:"Logos", module:Logos},
 // { name: "FeaturedPost", module: FeaturedPost },
  //{ name: "PostsListing", module: PostsListing },
  //{ name: "PostDetails", module: PostDetails },
  { name: "RichTextArea", module: RichTextArea },
  { name: "UnsubscribeFrontPage", module:UnsubscribeFrontPage},
  { name: "UnsubscribeCompletePage", module:UnsubscribeCompletePage}
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
