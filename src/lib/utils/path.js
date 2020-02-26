/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

const getSelection = (data, pathname) => {
  let selection = {};

  data.forEach(item => {
    if (item.path === pathname) selection = { ...item };
    if (item.data) getSelection(item.data, pathname);
  });

  return selection;
};

export { getSelection };
