import React from 'react';
import globalCSS from './storySection.module.css';
import { useQuery, gql } from "@apollo/client";
import jQuery from 'jquery';

const ourStory = gql`
query GetOurStory {
  cmsBlocks (
    identifiers: ["our-story"]
  ){
    items {
      identifier
      content
      title
    }
  }
}
`;

const StorySection = props => {
    const { isMasked } = props;

    const { data, loading, error } = useQuery(ourStory);

    if (loading) {
        return <div>loading</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if(data){
        const content = jQuery.parseHTML(unescape(data.cmsBlocks.items[0].content))[0].innerText;
        console.log("Our Story :",content);
        jQuery(".storySection image").html(content);

        return (
            <>
                <section className="storySection py-55">
                    <div className="container">
                        <div className="image" data-type="background" data-speed="2">
                            <div>
                                <div className="storySection_txt" data-aos="fade-up">
                                    <h3 className="sectionHeading">Our Story</h3>
                                    <p className="tagline">Ajmal Perfumes, over 7 decades of crafting memories.</p>
                                    <h5>"A fragrance is all that it takes to travel through time, such is the bond between memory and smell" – <span> Late Haji Ajmal Ali.</span></h5>
                                    <p>Nothing unlocks an old memory better than smell, be it the memory of lost love or of a fond friend. At Ajmal we help towards recreating those memories through our fragrances.</p>
                                    <a href="#" className="discoverAllBtn">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
};

export default StorySection;

StorySection.propTypes = {};
