import React, { useEffect, useState } from 'react';
import { useScrollLock } from '@magento/peregrine';
import globalCSS from './legacySection.module.css';
import Image from '@magento/venia-ui/lib/components/Image';
import { useQuery, gql } from "@apollo/client";
import jQuery from 'jquery';
import { any } from 'prop-types';


const fragrances = gql`
query GetExchangeRates {
  cmsBlocks (
    identifiers: ["our-legacy"]
  ){
    items {
      identifier
      content
      title
    }
  }
}
`;

const LegacySection = props => {
    const { ourLegacy } = props;
    const content = jQuery.parseHTML(unescape(ourLegacy[0].content));
    console.log("Query Output",ourLegacy);
    jQuery(".legacySection").html(content[0].innerText);

    return (
        <section className="legacySection">
        </section>
    );
};

export default LegacySection;

LegacySection.propTypes = {
    ourLegacy: any
};
