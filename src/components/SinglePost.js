import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
};

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    const serializers = {
        types: {
          code: (props) => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          ),
        },
      }

    if (!singlePost) return <div>Loading</div>;

    return(
        <main className="bg-gray-200 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
                {/* {singlePost && singlePost.map((singlePost, index) => ())} */}
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justifycenter p-8">
                    
                        <div className="bg-white rounded p-12 bg-opacity-75">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                            <div className="flex justify-center text-gray-800">
                                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} rel="" 
                                className="w-10 h-10 rounded-full"/>
                                <p className="cursive flex items-center pl-2 text-2xl">
                                    {singlePost.name}

                            </p>
                            </div>
                            
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t"
                    style={{height:"400px",}}/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent
                        
                    serializers={serializers}
                    blocks={singlePost.body} 
                    projectId="mhfpcu73"
                    dataSet="production"

                    />
                    <h1 className="text-red-600 font-bold text-6xl">Some Block content here</h1>
                    {singlePost.title}
                </div>
                
            </article>

        </main>
    )
}