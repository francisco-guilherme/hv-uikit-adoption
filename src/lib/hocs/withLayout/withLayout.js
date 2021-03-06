/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const getStyles = hasFooter => ({
  content: {
    marginTop: 50, // header height
    padding: `${hasFooter ? 0 : "30px 15px"}` // grid padding
  }
});

const withLayout = (Component, hasFooter = false) => props => {
  const { content } = getStyles(hasFooter);

  return (
    <>
      <Header />
      <section id="content" style={{ ...content }}>
        <Component {...props} />
      </section>
      {hasFooter && <Footer />}
    </>
  );
};

export default withLayout;
