import React from 'react';
import { gql } from "@apollo/client";
import jQuery from 'jquery';
import { any } from 'prop-types';

const fragrances = gql`
  query GetFragrance {
    cmsBlocks (
      identifiers: ["fragrances"]
    ){
      items {
        identifier
        content
        title
      }
    }
  }
`;

const FragrancesSection = props => {
    const { fragrances } = props;
    const content = jQuery.parseHTML(unescape(fragrances[0].content))[1].innerText;
    jQuery(".fragrancesSection_inner>h3").html(content);

    return (
        <section className="fragrancesSection py-55">
            <div className="container">
                <div className="fragrancesSection_bg position-relative">
                    <div className="fragrancesSection_inner  text-center">
                        <h3 className="font-grg"></h3>
                        <a href="#" className="discoverAllBtn">Discover all</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FragrancesSection;

FragrancesSection.propTypes = {
    fragrances: any
};
