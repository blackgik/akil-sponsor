import {
  acctApprovalHTML,
  agentChooseorganizationOnboardingHTML,
  directDebitWarningsHTML,
  loanRequestHTML,
  loanStatusUpdateHTML,
  beneficiaryOnboardingHTML,
  organizationChoosesAgentOnboardingHTML,
  paymentReceiptHTML,
  paymentWarningHTML,
  withdrawalReceiptHTML
} from './mailerHtml.js';

export const onboardinMail = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

      <head>
          <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>

          <style type="text/css">
              @media only screen and (min-width: 660px) {
                  .u-row {
                      width: 640px !important;
                  }

                  .u-row .u-col {
                      vertical-align: top;
                  }

                  .u-row .u-col-100 {
                      width: 640px !important;
                  }

              }

              @media (max-width: 660px) {
                  .u-row-container {
                      max-width: 100% !important;
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                  }

                  .u-row .u-col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                  }

                  .u-row {
                      width: 100% !important;
                  }

                  .u-col {
                      width: 100% !important;
                  }

                  .u-col>div {
                      margin: 0 auto;
                  }
              }

              body {
                  margin: 0;
                  padding: 0;
              }

              table,
              tr,
              td {
                  vertical-align: top;
                  border-collapse: collapse;
              }

              p {
                  margin: 0;
              }

              .ie-container table,
              .mso-container table {
                  table-layout: fixed;
              }

              * {
                  line-height: inherit;
              }

              a[x-apple-data-detectors='true'] {
                  color: inherit !important;
                  text-decoration: none !important;
              }

              table,
              td {
                  color: #000000;
              }

              #u_body a {
                  color: #0000ee;
                  text-decoration: underline;
              }

              @media (max-width: 480px) {
                  #u_content_text_deprecated_1 .v-line-height {
                      line-height: 170% !important;
                  }

                  #u_content_button_2 .v-button-colors {
                      color: #FFFFFF !important;
                      background-color: white !important;
                  }

                  #u_content_button_2 .v-button-colors:hover {
                      color: #FFFFFF !important;
                      background-color: #3AAEE0 !important;
                  }
              }
          </style>



      </head>

      <body class="clean-body u_body"
          style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body"
              style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
              cellpadding="0" cellspacing="0">
              <tbody>
                  <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                  <div
                                      style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                      <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                          <div style="height: 100%;width: 100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div
                                                  style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                  <!--<![endif]-->

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <table width="100%" cellpadding="0" cellspacing="0"
                                                                      border="0">
                                                                      <tr>
                                                                          <td style="padding-right: 0px;padding-left: 0px;"
                                                                              align="center">

                                                                              <img align="center" border="0"
                                                                                  src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                  alt="Image" title="Image"
                                                                                  style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                  width="217" />

                                                                          </td>
                                                                      </tr>
                                                                      <tr style="border-collapse:collapse">
                                                                          <td align="center"
                                                                              style="padding:5px;Margin:0;font-size:0">
                                                                              <table border="0" width="100%" height="100%"
                                                                                  cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                  <tr style="border-collapse:collapse">
                                                                                      <td
                                                                                          style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div><!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>





                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div
                                      style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                      <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                          <div style="height: 100%;width: 100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div
                                                  style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                  <!--<![endif]-->

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                      <p
                                                                          style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                          <span
                                                                              style="font-size: 24px; line-height: 36px;"><span
                                                                                  style="color:#002366; line-height: 21px;"><strong><span
                                                                                          style="line-height: 21px;">Dear
                                                                                      </span></strong></span><strong><span
                                                                                      style="line-height: 21px;"><span
                                                                                          style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>

                                                                      </p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                      <p style="font-size: 18px; line-height: 150%;"></p>
                                                                      Congratulations! You have successfully onboarded as a
beneficiary and We are thrilled to welcome you to our
community.
                                                                      ,
                                                                      </p>

                                                                  </div>
                                                                  <br>
                                                                  <div class="v-line-height"
                                                                      style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                      <p
                                                                          style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                          Below, you will find your login
                                                                          credentials. It is imperative to keep this
                                                                          information secure for your personal use.
                                                                      </p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table id="u_content_text_deprecated_1"
                                                      style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 14px; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                                      <p
                                                                          style="font-size: 14px; line-height: 170%; text-align: justify;">
                                                                          <span>
                                                                              <ul
                                                                                  style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                                  <li>Name of Sponsor:
                                                                                      ${
                                                                                        data.name_of_cooperation
                                                                                      }
                                                                                  </li>
                                                                                  <li>Email: ${
                                                                                    data.email
                                                                                  }</li>
                                                                                  <li>Organisation Unique Code: ${
                                                                                    data.company_code
                                                                                  } (This is your secret pass into your
                                                                                      beneficiary; please ensure its
                                                                                      confidentiality as it is required for
                                                                                      every login of your beneficiaries)</li>
                                                                                  <li>Organisation Login URL: <a
                                                                                          style="color: red;"
                                                                                          href="https://beneficiary.akilaah.com/login">https://beneficiary.akilaah.com</a>
                                                                                  </li>
                                                                              </ul>
                                                                              <br>
                                                                          </span>
                                                                      </p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                      <p style="font-size: 18px; line-height: 150%;">
                                                                          Feel free to explore and make the most of your
                                                                          experience within your organisation on AKILAAH. If
                                                                          you have any questions or need assistance, do not
                                                                          hesitate to reach out to our support team at
                                                                          <a
                                                                              href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                          or
                                                                          your agent
                                                                      </p> <br>
                                                                      Once again, welcome to AKILAAH! We look forward to
                                                                      achieving great things together.

                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table id="u_content_button_2"
                                                      style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                                                  <div align="center">
                                                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://sponsor.akilaah.com" style="height:37px; v-text-anchor:middle; width:122px;" arcsize="11%"  stroke="f" fillcolor="#e67e23"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                                                      <a href="https://sponsor.akilaah.com/login"
                                                                          target="_blank" class="v-button v-button-colors"
                                                                          style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #002366; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 14px;">
                                                                          <span class="v-line-height"
                                                                              style="display:block;padding:10px 20px;line-height:120%;"><strong><span
                                                                                      style="line-height: 16.8px;">LOGIN
                                                                                      NOW</span></strong></span>
                                                                      </a>
                                                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                      <tr style="border-collapse:collapse">
                                                          <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                              <table border="0" width="100%" height="100%" cellpadding="0"
                                                                  cellspacing="0" role="presentation"
                                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                  <tr style="border-collapse:collapse">
                                                                      <td
                                                                          style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div><!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>





                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                  <div
                                      style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                      <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                          <div style="height: 100%;width: 100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div
                                                  style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                  <!--<![endif]-->

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <div>
                                                          <tbody>
                                                              <tr>
                                                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                      align="left">

                                                                      <div align="center">
                                                              <tr style="border-collapse:collapse">
                                                                  <td align="center"
                                                                      style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                      <table cellpadding="0" cellspacing="0"
                                                                          class="es-table-not-adapt es-social"
                                                                          role="presentation"
                                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                          <tr style="border-collapse:collapse">
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                  <a href="https://twitter.com/akilaahdigital"
                                                                                      title="twitter" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                          alt="twitter" title="twitter"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                  <a href="https://www.instagram.com/akilaahdigital/"
                                                                                      title="Instagram" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                          alt="Instagram" title="Instagram"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                  <a href="https://www.linkedin.com/company/akilaah/"
                                                                                      title="linkedin" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                          alt="linkedin" title="linkedin"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                  <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                      title="Facebook" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                          alt="Facebook" title="Facebook"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                              <tr>
                                                      </div>

                      </td>
                  </tr>
              </tbody>
          </table>

          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
              width="100%" border="0">
              <tbody>
                  <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                          align="left">

                          <div class="v-line-height"
                              style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                              <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                      2024 MAJ
                                      FINTECH Limited RC
                                      1731274</span></p>
                          </div>

                      </td>
                  </tr>
              </tbody>
          </table>

          <!--[if (!mso)&(!IE)]><!-->
          </div><!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>



          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
      </body>

    </html>
     `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name_of_cooperation}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://sponsor.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const invitationMail = (data) => {
  return {
    html: `
      <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.firstname.toUpperCase()}</span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                Congratulations! You have successfully onboarded as a
                                                                beneficiary and We are thrilled to welcome you to our
                                                                community.
                                                                </p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">
                                                                    Please take a moment to log in to your account to
                                                                    finalize your onboarding procedures and complete
                                                                    your onboarding fee payment. Should you encounter
                                                                    any challenges or have any questions, our dedicated
                                                                    team is here to assist you. Feel free to reach out
                                                                    to us at
                                                                    <a
                                                                        href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                </p> 
                                                                Once again, welcome We look forward to
                                                                achieving great things together.

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                           
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
       `,
    text: `welcome to MAJFINTECH Onboarding\n
    Your login Credentials can be seen below\n
    \n
    Name of Coopoeration</strong>: ${data.name_of_cooperation}\n
    email: ${data.email}\n
    password:${data.password}\n
    company Unique Code:${data.company_code}\n
    Login url: https://sponsor.akilaah.com \n\n
    NB: You Company Unique code should be share to beneficiaries `
  };
};

export const beneficiaryBulkUpload = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
        <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>

        <style type="text/css">
            @media only screen and (min-width: 660px) {
                .u-row {
                    width: 640px !important;
                }

                .u-row .u-col {
                    vertical-align: top;
                }

                .u-row .u-col-100 {
                    width: 640px !important;
                }

            }

            @media (max-width: 660px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }

                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }

                .u-row {
                    width: 100% !important;
                }

                .u-col {
                    width: 100% !important;
                }

                .u-col>div {
                    margin: 0 auto;
                }
            }

            body {
                margin: 0;
                padding: 0;
            }

            table,
            tr,
            td {
                vertical-align: top;
                border-collapse: collapse;
            }

            p {
                margin: 0;
            }

            .ie-container table,
            .mso-container table {
                table-layout: fixed;
            }

            * {
                line-height: inherit;
            }

            a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
            }

            table,
            td {
                color: #000000;
            }

            #u_body a {
                color: #0000ee;
                text-decoration: underline;
            }

            @media (max-width: 480px) {
                #u_content_text_deprecated_1 .v-line-height {
                    line-height: 170% !important;
                }

                #u_content_button_2 .v-button-colors {
                    color: #FFFFFF !important;
                    background-color: white !important;
                }

                #u_content_button_2 .v-button-colors:hover {
                    color: #FFFFFF !important;
                    background-color: #3AAEE0 !important;
                }
            }
        </style>



    </head>

    <body class="clean-body u_body"
        style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table id="u_body"
            style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
            cellpadding="0" cellspacing="0">
            <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <table width="100%" cellpadding="0" cellspacing="0"
                                                                    border="0">
                                                                    <tr>
                                                                        <td style="padding-right: 0px;padding-left: 0px;"
                                                                            align="center">

                                                                            <img align="center" border="0"
                                                                                src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                alt="Image" title="Image"
                                                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                width="217" />

                                                                        </td>
                                                                    </tr>
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="center"
                                                                            style="padding:5px;Margin:0;font-size:0">
                                                                            <table border="0" width="100%" height="100%"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                <tr style="border-collapse:collapse">
                                                                                    <td
                                                                                        style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div><!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>





                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                    <p
                                                                        style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                        <span
                                                                            style="font-size: 24px; line-height: 36px;"><span
                                                                                style="color:#002366; line-height: 21px;"><strong><span
                                                                                        style="line-height: 21px;">Dear
                                                                                    </span></strong></span><strong><span
                                                                                    style="line-height: 21px;"><span
                                                                                        style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>

                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p style="font-size: 18px; line-height: 150%;"></p>
                                                                    We wanted to inform you that the recent bulk upload of
                                                                    beneficiaries to Akilaah has been successfully processed. The
                                                                    new beneficiaries are now officially part of your community.
                                                                    </p>

                                                                </div>
                                                                <br>
                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p
                                                                        style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                        Here are the key details regarding the bulk upload:
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_text_deprecated_1"
                                                    style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                    <p style="font-size: 14px; text-align: justify;">
                                                                        <span>
                                                                            <ul
                                                                                style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                                <li>Number of Members Uploaded:
                                                                                    ${
                                                                                      data.number_uploaded
                                                                                    }
                                                                                </li>
                                                                                <li>Upload Date and Time: ${
                                                                                  data.date
                                                                                }</li>
                                                                            </ul>
                                                                            <br>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p style="font-size: 18px; line-height: 150%;">
                                                                        Each beneficiary has been sent an individual confirmation
                                                                        email with their login credentials. They should
                                                                        receive a separate email notifying them of their
                                                                        successful onboarding.
                                                                    </p> <br>
                                                                    If you have any questions or concerns regarding your
                                                                    payment or if there's anything else we can assist you
                                                                    with, please don't hesitate to contact our support team
                                                                    at
                                                                    <a href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                    <br> <br>
                                                                    <p>Thank you </p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_button_2"
                                                    style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tr style="border-collapse:collapse">
                                                        <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                            <table border="0" width="100%" height="100%" cellpadding="0"
                                                                cellspacing="0" role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr style="border-collapse:collapse">
                                                                    <td
                                                                        style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div><!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>





                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <div>
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div align="center">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                <a href="https://twitter.com/akilaahdigital"
                                                                                    title="twitter" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                        alt="twitter" title="twitter"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                <a href="https://www.instagram.com/akilaahdigital/"
                                                                                    title="Instagram" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                        alt="Instagram" title="Instagram"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                <a href="https://www.linkedin.com/company/akilaah/"
                                                                                    title="linkedin" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                        alt="linkedin" title="linkedin"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                    title="Facebook" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                        alt="Facebook" title="Facebook"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                            <tr>
                                                    </div>

                    </td>
                </tr>
            </tbody>
        </table>

        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
            width="100%" border="0">
            <tbody>
                <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                        align="left">

                        <div class="v-line-height"
                            style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                            <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                    2024 MAJ
                                    FINTECH Limited RC
                                    1731274</span></p>
                        </div>

                    </td>
                </tr>
            </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!-->
        </div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
        </div>
        </div>



        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
    </body>

    </html>
     `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name_of_cooperation}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://sponsor.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const contributionBulkUpload = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
        <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>

        <style type="text/css">
            @media only screen and (min-width: 660px) {
                .u-row {
                    width: 640px !important;
                }

                .u-row .u-col {
                    vertical-align: top;
                }

                .u-row .u-col-100 {
                    width: 640px !important;
                }

            }

            @media (max-width: 660px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }

                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }

                .u-row {
                    width: 100% !important;
                }

                .u-col {
                    width: 100% !important;
                }

                .u-col>div {
                    margin: 0 auto;
                }
            }

            body {
                margin: 0;
                padding: 0;
            }

            table,
            tr,
            td {
                vertical-align: top;
                border-collapse: collapse;
            }

            p {
                margin: 0;
            }

            .ie-container table,
            .mso-container table {
                table-layout: fixed;
            }

            * {
                line-height: inherit;
            }

            a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
            }

            table,
            td {
                color: #000000;
            }

            #u_body a {
                color: #0000ee;
                text-decoration: underline;
            }

            @media (max-width: 480px) {
                #u_content_text_deprecated_1 .v-line-height {
                    line-height: 170% !important;
                }

                #u_content_button_2 .v-button-colors {
                    color: #FFFFFF !important;
                    background-color: white !important;
                }

                #u_content_button_2 .v-button-colors:hover {
                    color: #FFFFFF !important;
                    background-color: #3AAEE0 !important;
                }
            }
        </style>



    </head>

    <body class="clean-body u_body"
        style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table id="u_body"
            style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
            cellpadding="0" cellspacing="0">
            <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <table width="100%" cellpadding="0" cellspacing="0"
                                                                    border="0">
                                                                    <tr>
                                                                        <td style="padding-right: 0px;padding-left: 0px;"
                                                                            align="center">

                                                                            <img align="center" border="0"
                                                                                src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                alt="Image" title="Image"
                                                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                width="217" />

                                                                        </td>
                                                                    </tr>
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="center"
                                                                            style="padding:5px;Margin:0;font-size:0">
                                                                            <table border="0" width="100%" height="100%"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                <tr style="border-collapse:collapse">
                                                                                    <td
                                                                                        style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div><!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>





                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                    <p
                                                                        style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                        <span
                                                                            style="font-size: 24px; line-height: 36px;"><span
                                                                                style="color:#002366; line-height: 21px;"><strong><span
                                                                                        style="line-height: 21px;">Dear
                                                                                    </span></strong></span><strong><span
                                                                                    style="line-height: 21px;"><span
                                                                                        style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>

                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p style="font-size: 18px; line-height: 150%;"></p>
                                                                    We want to inform you that the bulk upload for the
                                                                    Contribution Module has been successfully processed. The
                                                                    contributions from the uploaded data have been added to
                                                                    the system.
                                                                    </p>

                                                                </div>
                                                                <br>
                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p
                                                                        style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                        Here are the details of the bulk upload:
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_text_deprecated_1"
                                                    style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                    <p style="font-size: 14px; text-align: justify;">
                                                                        <span>
                                                                            <ul
                                                                                style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                                <li>Upload Date:
                                                                                    ${data.date}
                                                                                </li>
                                                                                <li>Number of Contributions Uploaded: ${
                                                                                  data.number
                                                                                }</li>
                                                                                <li>Status: ${
                                                                                  data.status
                                                                                }</li>
                                                                            </ul>
                                                                            <br>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p style="font-size: 18px; line-height: 150%;">
                                                                        If you encounter any discrepancies or have questions
                                                                        regarding the uploaded data, please review the
                                                                        information in the admin portal. Additionally, our
                                                                        support team is available to assist you if needed.
                                                                    </p>
                                                                    <p>Thank You</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_button_2"
                                                    style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tr style="border-collapse:collapse">
                                                        <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                            <table border="0" width="100%" height="100%" cellpadding="0"
                                                                cellspacing="0" role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr style="border-collapse:collapse">
                                                                    <td
                                                                        style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div><!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>





                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <div>
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div align="center">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                <a href="https://twitter.com/akilaahdigital"
                                                                                    title="twitter" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                        alt="twitter" title="twitter"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                <a href="https://www.instagram.com/akilaahdigital/"
                                                                                    title="Instagram" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                        alt="Instagram" title="Instagram"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                <a href="https://www.linkedin.com/company/akilaah/"
                                                                                    title="linkedin" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                        alt="linkedin" title="linkedin"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                    title="Facebook" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                        alt="Facebook" title="Facebook"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                            <tr>
                                                    </div>

                    </td>
                </tr>
            </tbody>
        </table>

        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
            width="100%" border="0">
            <tbody>
                <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                        align="left">

                        <div class="v-line-height"
                            style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                            <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                    2024 MAJ
                                    FINTECH Limited RC
                                    1731274</span></p>
                        </div>

                    </td>
                </tr>
            </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!-->
        </div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
        </div>
        </div>



        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
    </body>

    </html>
     `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name_of_cooperation}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://sponsor.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const loanBulkUpload = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
        <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>

        <style type="text/css">
            @media only screen and (min-width: 660px) {
                .u-row {
                    width: 640px !important;
                }

                .u-row .u-col {
                    vertical-align: top;
                }

                .u-row .u-col-100 {
                    width: 640px !important;
                }

            }

            @media (max-width: 660px) {
                .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }

                .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }

                .u-row {
                    width: 100% !important;
                }

                .u-col {
                    width: 100% !important;
                }

                .u-col>div {
                    margin: 0 auto;
                }
            }

            body {
                margin: 0;
                padding: 0;
            }

            table,
            tr,
            td {
                vertical-align: top;
                border-collapse: collapse;
            }

            p {
                margin: 0;
            }

            .ie-container table,
            .mso-container table {
                table-layout: fixed;
            }

            * {
                line-height: inherit;
            }

            a[x-apple-data-detectors='true'] {
                color: inherit !important;
                text-decoration: none !important;
            }

            table,
            td {
                color: #000000;
            }

            #u_body a {
                color: #0000ee;
                text-decoration: underline;
            }

            @media (max-width: 480px) {
                #u_content_text_deprecated_1 .v-line-height {
                    line-height: 170% !important;
                }

                #u_content_button_2 .v-button-colors {
                    color: #FFFFFF !important;
                    background-color: white !important;
                }

                #u_content_button_2 .v-button-colors:hover {
                    color: #FFFFFF !important;
                    background-color: #3AAEE0 !important;
                }
            }
        </style>



    </head>

    <body class="clean-body u_body"
        style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table id="u_body"
            style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
            cellpadding="0" cellspacing="0">
            <tbody>
                <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <table width="100%" cellpadding="0" cellspacing="0"
                                                                    border="0">
                                                                    <tr>
                                                                        <td style="padding-right: 0px;padding-left: 0px;"
                                                                            align="center">

                                                                            <img align="center" border="0"
                                                                                src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                alt="Image" title="Image"
                                                                                style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                width="217" />

                                                                        </td>
                                                                    </tr>
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="center"
                                                                            style="padding:5px;Margin:0;font-size:0">
                                                                            <table border="0" width="100%" height="100%"
                                                                                cellpadding="0" cellspacing="0"
                                                                                role="presentation"
                                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                <tr style="border-collapse:collapse">
                                                                                    <td
                                                                                        style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div><!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>





                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                    <p
                                                                        style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                        <span
                                                                            style="font-size: 24px; line-height: 36px;"><span
                                                                                style="color:#002366; line-height: 21px;"><strong><span
                                                                                        style="line-height: 21px;">Dear
                                                                                    </span></strong></span><strong><span
                                                                                    style="line-height: 21px;"><span
                                                                                        style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>

                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p style="font-size: 18px; line-height: 150%;"></p>
                                                                    We want to inform you that the bulk upload for the Loan
                                                                    Module has been successfully processed. The loans from
                                                                    the uploaded data have been added to the system.
                                                                    </p>

                                                                </div>
                                                                <br>
                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p
                                                                        style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                        Here are the details of the bulk upload:
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_text_deprecated_1"
                                                    style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                    <p style="font-size: 14px; text-align: justify;">
                                                                        <span>
                                                                            <ul
                                                                                style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                                <li>Upload Date:
                                                                                    ${data.date}
                                                                                </li>
                                                                                <li>Number of Loans Uploaded: ${
                                                                                  data.number
                                                                                }</li>
                                                                                <li>Status: ${
                                                                                  data.status
                                                                                }</li>
                                                                            </ul>
                                                                            <br>
                                                                        </span>
                                                                    </p>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div class="v-line-height"
                                                                    style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                    <p style="font-size: 18px; line-height: 150%;">
                                                                        If you encounter any discrepancies or have questions
                                                                        regarding the uploaded data, please review the
                                                                        information in the admin portal. Additionally, our
                                                                        support team is available to assist you if needed.
                                                                    </p><br>
                                                                    <p>Thank You</p>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <table id="u_content_button_2"
                                                    style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <tr style="border-collapse:collapse">
                                                        <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                            <table border="0" width="100%" height="100%" cellpadding="0"
                                                                cellspacing="0" role="presentation"
                                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                <tr style="border-collapse:collapse">
                                                                    <td
                                                                        style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div><!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td><![endif]-->
                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>





                        <div class="u-row-container" style="padding: 0px;background-color: transparent">
                            <div class="u-row"
                                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                <div
                                    style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                    <div class="u-col u-col-100"
                                        style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                        <div style="height: 100%;width: 100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div
                                                style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                <!--<![endif]-->

                                                <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                    cellpadding="0" cellspacing="0" width="100%" border="0">
                                                    <div>
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div align="center">
                                                            <tr style="border-collapse:collapse">
                                                                <td align="center"
                                                                    style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                <a href="https://twitter.com/akilaahdigital"
                                                                                    title="twitter" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                        alt="twitter" title="twitter"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                <a href="https://www.instagram.com/akilaahdigital/"
                                                                                    title="Instagram" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                        alt="Instagram" title="Instagram"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                <a href="https://www.linkedin.com/company/akilaah/"
                                                                                    title="linkedin" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                        alt="linkedin" title="linkedin"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                            <td align="left" valign="middle"
                                                                                style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                    title="Facebook" target="_blank">
                                                                                    <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                        alt="Facebook" title="Facebook"
                                                                                        width="32"
                                                                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                            <tr>
                                                    </div>

                    </td>
                </tr>
            </tbody>
        </table>

        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
            width="100%" border="0">
            <tbody>
                <tr>
                    <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                        align="left">

                        <div class="v-line-height"
                            style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                            <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                    2024 MAJ
                                    FINTECH Limited RC
                                    1731274</span></p>
                        </div>

                    </td>
                </tr>
            </tbody>
        </table>

        <!--[if (!mso)&(!IE)]><!-->
        </div><!--<![endif]-->
        </div>
        </div>
        <!--[if (mso)|(IE)]></td><![endif]-->
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
        </div>
        </div>



        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
    </body>

    </html>
     `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name_of_cooperation}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://sponsor.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const loanRequestMail = (data) => {
  return {
    html: `<h3>Hello, ${data.loan_requester}<h3>
    <p>You Loan Request Summary are as follows:</p>
    
    <p><strong>name of the loan request</strong>: ${data.loan_name}<br /> 
    <strong>requested amount</strong>: ${data.amount_requested}<br /> 
    <strong>payment plan</strong>: ${data.payment_plan}<br /> <p>
    
    <p><strong>loan status</strong>: your loan was ${data.loan_status}<br />
    
    NB: Please contact Admin for further information if you need better information about the given loan request status.`,

    text: `Hello, ${data.loan_requester}\n
    You Loan Request Summary are as follows:\n
    
    name of the loan request: ${data.loan_name}\n
    requested amount: ${data.amount_requested}\n
    payment plan: ${data.payment_plan}\n \n
    
    loan status: your loan was ${data.loan_status}\n\n
    
    NB: Please contact Admin for further details.`
  };
};

export const loanDisbuersmenttMail = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"> We
                                                                    wanted to inform you that the loan request from
                                                                    <strong>${data.beneficiary_name.toUpperCase()}</strong>
                                                                    has been approved and now requires
                                                                    disbursement. Please proceed with the disbursement
                                                                    process through the admin portal.
                                                                </p>
                                                            </div>


                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"> Here are
                                                                    the key details:
                                                                </p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_text_deprecated_1"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                <p style="font-size: 14px; text-align: justify;">
                                                                    <span>
                                                                        <ul
                                                                            style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                            <li>Product Name:
                                                                                ${data.product_name}
                                                                            </li>
                                                                            <li>Member Name:
                                                                                ${
                                                                                  data.beneficiary_name
                                                                                }
                                                                            </li>
                                                                            <li>Loan Request ID: ${
                                                                              data.request_id
                                                                            }</li>
                                                                            <li>Approved Loan Amount: ${
                                                                              data.amount
                                                                            }</li>
                                                                            <li>Approval Date: ${
                                                                              data.date
                                                                            }</li>
                                                                        </ul>
                                                                        <br>
                                                                    </span>
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">To
                                                                    disburse the approved amount, log in to the admin
                                                                    portal and navigate to the Disbursement section.
                                                                    Ensure that the necessary funds are available for
                                                                    the transfer. <br> <br>
                                                                    If you have any questions or need additional
                                                                    information, please do not hesitate to contact our
                                                                    support team at <a
                                                                        href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                </p>
                                                                <br> Thank You
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_button_2"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                        <table border="0" width="100%" height="100%" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td
                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
    `,

    text: `Hello, ${data.loan_requester}\n
    You Loan Request Summary are as follows:\n
    
    name of the loan request: ${data.loan_name}\n
    requested amount: ${data.amount_requested}\n
    payment plan: ${data.payment_plan}\n \n
    
    loan status: your loan was ${data.loan_status}\n\n
    
    NB: Please contact Admin for further details.`
  };
};

export const verifyOnbordingMail = (data) => {
  return {
    html: `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office">
  
        <head>
            <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
            <title></title>
  
            <style type="text/css">
                @media only screen and (min-width: 660px) {
                    .u-row {
                        width: 640px !important;
                    }
  
                    .u-row .u-col {
                        vertical-align: top;
                    }
  
                    .u-row .u-col-100 {
                        width: 640px !important;
                    }
  
                }
  
                @media (max-width: 660px) {
                    .u-row-container {
                        max-width: 100% !important;
                        padding-left: 0px !important;
                        padding-right: 0px !important;
                    }
  
                    .u-row .u-col {
                        min-width: 320px !important;
                        max-width: 100% !important;
                        display: block !important;
                    }
  
                    .u-row {
                        width: 100% !important;
                    }
  
                    .u-col {
                        width: 100% !important;
                    }
  
                    .u-col>div {
                        margin: 0 auto;
                    }
                }
  
                body {
                    margin: 0;
                    padding: 0;
                }
  
                table,
                tr,
                td {
                    vertical-align: top;
                    border-collapse: collapse;
                }
  
                p {
                    margin: 0;
                }
  
                .ie-container table,
                .mso-container table {
                    table-layout: fixed;
                }
  
                * {
                    line-height: inherit;
                }
  
                a[x-apple-data-detectors='true'] {
                    color: inherit !important;
                    text-decoration: none !important;
                }
  
                table,
                td {
                    color: #000000;
                }
  
                #u_body a {
                    color: #0000ee;
                    text-decoration: underline;
                }
  
                @media (max-width: 480px) {
                    #u_content_text_deprecated_1 .v-line-height {
                        line-height: 170% !important;
                    }
  
                    #u_content_button_2 .v-button-colors {
                        color: #FFFFFF !important;
                        background-color: white !important;
                    }
  
                    #u_content_button_2 .v-button-colors:hover {
                        color: #FFFFFF !important;
                        background-color: #3AAEE0 !important;
                    }
                }
            </style>
  
  
  
        </head>
  
        <body class="clean-body u_body"
            style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
            <!--[if IE]><div class="ie-container"><![endif]-->
            <!--[if mso]><div class="mso-container"><![endif]-->
            <table id="u_body"
                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
                cellpadding="0" cellspacing="0">
                <tbody>
                    <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
  
  
  
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                <div class="u-row"
                                    style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                        <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="u-col u-col-100"
                                            style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                            <div style="height: 100%;width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                    <!--<![endif]-->
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <table width="100%" cellpadding="0" cellspacing="0"
                                                                        border="0">
                                                                        <tr>
                                                                            <td style="padding-right: 0px;padding-left: 0px;"
                                                                                align="center">
  
                                                                                <img align="center" border="0"
                                                                                    src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                    alt="Image" title="Image"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                    width="217" />
  
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:5px;Margin:0;font-size:0">
                                                                                <table border="0" width="100%" height="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td
                                                                                            style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                </div><!--<![endif]-->
                                            </div>
                                        </div>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                    </div>
                                </div>
                            </div>
  
  
  
  
  
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                <div class="u-row"
                                    style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                                        <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="u-col u-col-100"
                                            style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                            <div style="height: 100%;width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                    <!--<![endif]-->
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                        <p
                                                                            style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                            <span
                                                                                style="font-size: 24px; line-height: 36px;"><span
                                                                                    style="color:#002366; line-height: 21px;"><strong><span
                                                                                            style="line-height: 21px;">DEAR
                                                                                        </span></strong></span><strong><span
                                                                                        style="line-height: 21px;"><span
                                                                                            style="color: #CB6015; line-height: 21px;">${data.name.toUpperCase()}</span></span></strong></span>
                                                                        </p>
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p
                                                                            style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                            We received a request to create your new
                                                                            account. To proceed with the onboarding process, please
                                                                            use the following One-Time Password (OTP):</p>
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 29px; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                                        <p style="line-height: 150%;"><strong><span
                                                                                    style="color:#CB6015; line-height: 43.5px;">OTP:
                                                                                    ${
                                                                                      data.code
                                                                                    }</span></strong></p>
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <table id="u_content_text_deprecated_1"
                                                        style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 170%; text-align: left; word-wrap: break-word; color:#002366;">
                                                                        <p style="line-height: 170%;">Enter this OTP on the
                                                                           email verification page to complete the process. If you
                                                                            have not requested an account creation, no action is
                                                                            needed on your part</p>
                                                                        <p style="line-height: 170%;">This OTP is valid for 5
                                                                            mins for security purposes. If you encounter any
                                                                            issues or did not request an account creation, please
                                                                            contact our support team immediately at <a
                                                                                href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                        </p>
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table id="u_content_button_2"
                                                        style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                                                    <div align="center">
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://sponsor.mmcoop.org" style="height:37px; v-text-anchor:middle; width:122px;" arcsize="11%"  stroke="f" fillcolor="#e67e23"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                                                        <a href="mailto:ask@akilaah.com" target="_blank"
                                                                            class="v-button v-button-colors"
                                                                            style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #002366; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 18px;">
                                                                            <span class="v-line-height"
                                                                                style="display:block;padding:10px 20px;line-height:120%;"><strong><span
                                                                                        style="line-height: 16.8px;">CONTACT
                                                                                        CUSTOMER SERVICE
                                                                                    </span></strong></span>
                                                                        </a>
                                                                        <!--[if mso]></center></v:roundrect><![endif]-->
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table id="u_content_button_2"
                                                        style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                                <table border="0" width="100%" height="100%" cellpadding="0"
                                                                    cellspacing="0" role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td
                                                                            style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
  
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                </div><!--<![endif]-->
                                            </div>
                                        </div>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                    </div>
                                </div>
                            </div>
  
  
  
  
  
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                <div class="u-row"
                                    style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                        <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="u-col u-col-100"
                                            style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                            <div style="height: 100%;width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                    <!--<![endif]-->
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <div>
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">
  
                                                                        <div align="center">
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            class="es-table-not-adapt es-social"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                    <a href="https://twitter.com/akilaahdigital"
                                                                                        title="twitter" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                            alt="twitter" title="twitter"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                    <a href="https://www.instagram.com/akilaahdigital/"
                                                                                        title="Instagram" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                            alt="Instagram" title="Instagram"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                    <a href="https://www.linkedin.com/company/akilaah/"
                                                                                        title="linkedin" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                            alt="linkedin" title="linkedin"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                    <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                        title="Facebook" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                            alt="Facebook" title="Facebook"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                <tr>
                                                        </div>
  
                        </td>
                    </tr>
                </tbody>
            </table>
  
            <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                width="100%" border="0">
                <tbody>
                    <tr>
                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                            align="left">
  
                            <div class="v-line-height"
                                style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                        2024 MAJ
                                        FINTECH Limited RC
                                        1731274</span></p>
                            </div>
  
                        </td>
                    </tr>
                </tbody>
            </table>
  
            <!--[if (!mso)&(!IE)]><!-->
            </div><!--<![endif]-->
            </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
            </div>
            </div>
  
  
  
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
            </tr>
            </tbody>
            </table>
            <!--[if mso]></div><![endif]-->
            <!--[if IE]></div><![endif]-->
        </body>
  
      </html>
      `,
    text: `Dear ${data.name}\n
      This is your verification code ${data.code}\n
      
      NB: OTP is needed to verify that you own this email address.\n
  
      The verification code will only be valid for 15 minutes. please do not share this code with anyone.\n
      Note: if you did not initiate this request, please contact customer service immediately
      `
  };
};

export const paymentVerificationMail = (data) => {
    return {
      html: `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office">
  
        <head>
            <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG/>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="x-apple-disable-message-reformatting">
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
            <title></title>
  
            <style type="text/css">
                @media only screen and (min-width: 660px) {
                    .u-row {
                        width: 640px !important;
                    }
  
                    .u-row .u-col {
                        vertical-align: top;
                    }
  
                    .u-row .u-col-100 {
                        width: 640px !important;
                    }
  
                }
  
                @media (max-width: 660px) {
                    .u-row-container {
                        max-width: 100% !important;
                        padding-left: 0px !important;
                        padding-right: 0px !important;
                    }
  
                    .u-row .u-col {
                        min-width: 320px !important;
                        max-width: 100% !important;
                        display: block !important;
                    }
  
                    .u-row {
                        width: 100% !important;
                    }
  
                    .u-col {
                        width: 100% !important;
                    }
  
                    .u-col>div {
                        margin: 0 auto;
                    }
                }
  
                body {
                    margin: 0;
                    padding: 0;
                }
  
                table,
                tr,
                td {
                    vertical-align: top;
                    border-collapse: collapse;
                }
  
                p {
                    margin: 0;
                }
  
                .ie-container table,
                .mso-container table {
                    table-layout: fixed;
                }
  
                * {
                    line-height: inherit;
                }
  
                a[x-apple-data-detectors='true'] {
                    color: inherit !important;
                    text-decoration: none !important;
                }
  
                table,
                td {
                    color: #000000;
                }
  
                #u_body a {
                    color: #0000ee;
                    text-decoration: underline;
                }
  
                @media (max-width: 480px) {
                    #u_content_text_deprecated_1 .v-line-height {
                        line-height: 170% !important;
                    }
  
                    #u_content_button_2 .v-button-colors {
                        color: #FFFFFF !important;
                        background-color: white !important;
                    }
  
                    #u_content_button_2 .v-button-colors:hover {
                        color: #FFFFFF !important;
                        background-color: #3AAEE0 !important;
                    }
                }
            </style>
  
  
  
        </head>
  
        <body class="clean-body u_body"
            style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
            <!--[if IE]><div class="ie-container"><![endif]-->
            <!--[if mso]><div class="mso-container"><![endif]-->
            <table id="u_body"
                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
                cellpadding="0" cellspacing="0">
                <tbody>
                    <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
  
  
  
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                <div class="u-row"
                                    style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                        <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="u-col u-col-100"
                                            style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                            <div style="height: 100%;width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                    <!--<![endif]-->
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <table width="100%" cellpadding="0" cellspacing="0"
                                                                        border="0">
                                                                        <tr>
                                                                            <td style="padding-right: 0px;padding-left: 0px;"
                                                                                align="center">
  
                                                                                <img align="center" border="0"
                                                                                    src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                    alt="Image" title="Image"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                    width="217" />
  
                                                                            </td>
                                                                        </tr>
                                                                        <tr style="border-collapse:collapse">
                                                                            <td align="center"
                                                                                style="padding:5px;Margin:0;font-size:0">
                                                                                <table border="0" width="100%" height="100%"
                                                                                    cellpadding="0" cellspacing="0"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                    <tr style="border-collapse:collapse">
                                                                                        <td
                                                                                            style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                </div><!--<![endif]-->
                                            </div>
                                        </div>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                    </div>
                                </div>
                            </div>
  
  
  
  
  
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                <div class="u-row"
                                    style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                                        <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="u-col u-col-100"
                                            style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                            <div style="height: 100%;width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                    <!--<![endif]-->
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                        <p
                                                                            style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                            <span
                                                                                style="font-size: 24px; line-height: 36px;"><span
                                                                                    style="color:#002366; line-height: 21px;"><strong><span
                                                                                            style="line-height: 21px;">MAIL FROM:
                                                                                        </span></strong></span><strong><span
                                                                                        style="line-height: 21px;"><span
                                                                                            style="color: #CB6015; line-height: 21px;">${data.name.toUpperCase()}</span></span></strong></span>
                                                                        </p>
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
  
                                                    <table id="u_content_text_deprecated_1"
                                                        style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 170%; text-align: left; word-wrap: break-word; color:#002366;">
                                                                        <p style="line-height: 170%;">Email: ${data.data.email}\n</p>
                                                                        <p style="line-height: 170%;">Phone: ${data.data.phone}\n</p>
                                                                        <p style="line-height: 170%;">Note: ${data.data.description}</p>
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table id="u_content_button_2"
                                                        style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">
  
                                                                    <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                                                    <div align="center">
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://sponsor.mmcoop.org" style="height:37px; v-text-anchor:middle; width:122px;" arcsize="11%"  stroke="f" fillcolor="#e67e23"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                                                        <a href="mailto:ask@akilaah.com" target="_blank"
                                                                            class="v-button v-button-colors"
                                                                            style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #002366; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 18px;">
                                                                            <span class="v-line-height"
                                                                                style="display:block;padding:10px 20px;line-height:120%;"><strong><span
                                                                                        style="line-height: 16.8px;">CONTACT
                                                                                        CUSTOMER SERVICE
                                                                                    </span></strong></span>
                                                                        </a>
                                                                        <!--[if mso]></center></v:roundrect><![endif]-->
                                                                    </div>
  
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <table id="u_content_button_2"
                                                        style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                                <table border="0" width="100%" height="100%" cellpadding="0"
                                                                    cellspacing="0" role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td
                                                                            style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
  
                                                    <!--[if (!mso)&(!IE)]><!-->
                                                </div><!--<![endif]-->
                                            </div>
                                        </div>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                    </div>
                                </div>
                            </div>
  
  
  
  
  
                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                                <div class="u-row"
                                    style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                    <div
                                        style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                        <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                        <div class="u-col u-col-100"
                                            style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                            <div style="height: 100%;width: 100% !important;">
                                                <!--[if (!mso)&(!IE)]><!-->
                                                <div
                                                    style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                    <!--<![endif]-->
  
                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <div>
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">
  
                                                                        <div align="center">
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                        <table cellpadding="0" cellspacing="0"
                                                                            class="es-table-not-adapt es-social"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                    <a href="https://twitter.com/akilaahdigital"
                                                                                        title="twitter" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                            alt="twitter" title="twitter"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                    <a href="https://www.instagram.com/akilaahdigital/"
                                                                                        title="Instagram" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                            alt="Instagram" title="Instagram"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                    <a href="https://www.linkedin.com/company/akilaah/"
                                                                                        title="linkedin" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                            alt="linkedin" title="linkedin"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                    <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                        title="Facebook" target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                            alt="Facebook" title="Facebook"
                                                                                            width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                <tr>
                                                        </div>
  
                        </td>
                    </tr>
                </tbody>
            </table>
  
            <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
                width="100%" border="0">
                <tbody>
                    <tr>
                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                            align="left">
  
                            <div class="v-line-height"
                                style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                                <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                        2024 MAJ
                                        FINTECH Limited RC
                                        1731274</span></p>
                            </div>
  
                        </td>
                    </tr>
                </tbody>
            </table>
  
            <!--[if (!mso)&(!IE)]><!-->
            </div><!--<![endif]-->
            </div>
            </div>
            <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
            </div>
            </div>
            </div>
  
  
  
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
            </tr>
            </tbody>
            </table>
            <!--[if mso]></div><![endif]-->
            <!--[if IE]></div><![endif]-->
        </body>
  
      </html>
      `,text: `Dear ${data.first_name} ${data.last_name}\n
      Email: ${data.email}\n
      Phone: ${data.phone}\n
      
      ${data.description}
      `
    };
  };

export const forgotPasswordMail = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">

      <head>
          <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="x-apple-disable-message-reformatting">
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
          <title></title>

          <style type="text/css">
              @media only screen and (min-width: 660px) {
                  .u-row {
                      width: 640px !important;
                  }

                  .u-row .u-col {
                      vertical-align: top;
                  }

                  .u-row .u-col-100 {
                      width: 640px !important;
                  }

              }

              @media (max-width: 660px) {
                  .u-row-container {
                      max-width: 100% !important;
                      padding-left: 0px !important;
                      padding-right: 0px !important;
                  }

                  .u-row .u-col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                  }

                  .u-row {
                      width: 100% !important;
                  }

                  .u-col {
                      width: 100% !important;
                  }

                  .u-col>div {
                      margin: 0 auto;
                  }
              }

              body {
                  margin: 0;
                  padding: 0;
              }

              table,
              tr,
              td {
                  vertical-align: top;
                  border-collapse: collapse;
              }

              p {
                  margin: 0;
              }

              .ie-container table,
              .mso-container table {
                  table-layout: fixed;
              }

              * {
                  line-height: inherit;
              }

              a[x-apple-data-detectors='true'] {
                  color: inherit !important;
                  text-decoration: none !important;
              }

              table,
              td {
                  color: #000000;
              }

              #u_body a {
                  color: #0000ee;
                  text-decoration: underline;
              }

              @media (max-width: 480px) {
                  #u_content_text_deprecated_1 .v-line-height {
                      line-height: 170% !important;
                  }

                  #u_content_button_2 .v-button-colors {
                      color: #FFFFFF !important;
                      background-color: white !important;
                  }

                  #u_content_button_2 .v-button-colors:hover {
                      color: #FFFFFF !important;
                      background-color: #3AAEE0 !important;
                  }
              }
          </style>



      </head>

      <body class="clean-body u_body"
          style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
          <!--[if IE]><div class="ie-container"><![endif]-->
          <!--[if mso]><div class="mso-container"><![endif]-->
          <table id="u_body"
              style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
              cellpadding="0" cellspacing="0">
              <tbody>
                  <tr style="vertical-align: top">
                      <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                                  <div
                                      style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                      <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                          <div style="height: 100%;width: 100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div
                                                  style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                  <!--<![endif]-->

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <table width="100%" cellpadding="0" cellspacing="0"
                                                                      border="0">
                                                                      <tr>
                                                                          <td style="padding-right: 0px;padding-left: 0px;"
                                                                              align="center">

                                                                              <img align="center" border="0"
                                                                                  src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                                  alt="Image" title="Image"
                                                                                  style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                                  width="217" />

                                                                          </td>
                                                                      </tr>
                                                                      <tr style="border-collapse:collapse">
                                                                          <td align="center"
                                                                              style="padding:5px;Margin:0;font-size:0">
                                                                              <table border="0" width="100%" height="100%"
                                                                                  cellpadding="0" cellspacing="0"
                                                                                  role="presentation"
                                                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                                  <tr style="border-collapse:collapse">
                                                                                      <td
                                                                                          style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div><!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>





                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                                  <div
                                      style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                      <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                          <div style="height: 100%;width: 100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div
                                                  style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                  <!--<![endif]-->

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                      <p
                                                                          style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                          <span
                                                                              style="font-size: 24px; line-height: 36px;"><span
                                                                                  style="color:#002366; line-height: 21px;"><strong><span
                                                                                          style="line-height: 21px;">DEAR
                                                                                      </span></strong></span><strong><span
                                                                                      style="line-height: 21px;"><span
                                                                                          style="color: #CB6015; line-height: 21px;">${data.name.toUpperCase()}</span></span></strong></span>
                                                                      </p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                      <p
                                                                          style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                          We received a request to reset the password for your
                                                                          account. To proceed with the password reset, please
                                                                          use the following One-Time Password (OTP):</p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 29px; line-height: 150%; text-align: center; word-wrap: break-word;">
                                                                      <p style="line-height: 150%;"><strong><span
                                                                                  style="color:#CB6015; line-height: 43.5px;">OTP:
                                                                                  ${
                                                                                    data.code
                                                                                  }</span></strong></p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                                  <table id="u_content_text_deprecated_1"
                                                      style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <div class="v-line-height"
                                                                      style="font-size: 18px; line-height: 170%; text-align: left; word-wrap: break-word; color:#002366;">
                                                                      <p style="line-height: 170%;">Enter this OTP on the
                                                                          reset password page to complete the process. If you
                                                                          have not requested a password reset, no action is
                                                                          needed on your part</p>
                                                                      <p style="line-height: 170%;">This OTP is valid for 5
                                                                          mins for security purposes. If you encounter any
                                                                          issues or did not request a password reset, please
                                                                          contact our support team immediately at <a
                                                                              href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                      </p>
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table id="u_content_button_2"
                                                      style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">

                                                                  <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
                                                                  <div align="center">
                                                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://sponsor.mmcoop.org" style="height:37px; v-text-anchor:middle; width:122px;" arcsize="11%"  stroke="f" fillcolor="#e67e23"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                                                      <a href="mailto:ask@akilaah.com" target="_blank"
                                                                          class="v-button v-button-colors"
                                                                          style="box-sizing: border-box;display: inline-block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #002366; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;font-size: 18px;">
                                                                          <span class="v-line-height"
                                                                              style="display:block;padding:10px 20px;line-height:120%;"><strong><span
                                                                                      style="line-height: 16.8px;">CONTACT
                                                                                      CUSTOMER SERVICE
                                                                                  </span></strong></span>
                                                                      </a>
                                                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                                                  </div>

                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table id="u_content_button_2"
                                                      style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <tr style="border-collapse:collapse">
                                                          <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                              <table border="0" width="100%" height="100%" cellpadding="0"
                                                                  cellspacing="0" role="presentation"
                                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                  <tr style="border-collapse:collapse">
                                                                      <td
                                                                          style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>

                                                  <!--[if (!mso)&(!IE)]><!-->
                                              </div><!--<![endif]-->
                                          </div>
                                      </div>
                                      <!--[if (mso)|(IE)]></td><![endif]-->
                                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                              </div>
                          </div>





                          <div class="u-row-container" style="padding: 0px;background-color: transparent">
                              <div class="u-row"
                                  style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                                  <div
                                      style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                      <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                      <div class="u-col u-col-100"
                                          style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                          <div style="height: 100%;width: 100% !important;">
                                              <!--[if (!mso)&(!IE)]><!-->
                                              <div
                                                  style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                                  <!--<![endif]-->

                                                  <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                      cellpadding="0" cellspacing="0" width="100%" border="0">
                                                      <div>
                                                          <tbody>
                                                              <tr>
                                                                  <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                      align="left">

                                                                      <div align="center">
                                                              <tr style="border-collapse:collapse">
                                                                  <td align="center"
                                                                      style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                      <table cellpadding="0" cellspacing="0"
                                                                          class="es-table-not-adapt es-social"
                                                                          role="presentation"
                                                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                          <tr style="border-collapse:collapse">
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                  <a href="https://twitter.com/akilaahdigital"
                                                                                      title="twitter" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                          alt="twitter" title="twitter"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                                  <a href="https://www.instagram.com/akilaahdigital/"
                                                                                      title="Instagram" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                          alt="Instagram" title="Instagram"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                                  <a href="https://www.linkedin.com/company/akilaah/"
                                                                                      title="linkedin" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                          alt="linkedin" title="linkedin"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                              <td align="left" valign="middle"
                                                                                  style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                  <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                      title="Facebook" target="_blank">
                                                                                      <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                          alt="Facebook" title="Facebook"
                                                                                          width="32"
                                                                                          style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                  </a>
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                              <tr>
                                                      </div>

                      </td>
                  </tr>
              </tbody>
          </table>

          <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
              width="100%" border="0">
              <tbody>
                  <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                          align="left">

                          <div class="v-line-height"
                              style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                              <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                      2024 MAJ
                                      FINTECH Limited RC
                                      1731274</span></p>
                          </div>

                      </td>
                  </tr>
              </tbody>
          </table>

          <!--[if (!mso)&(!IE)]><!-->
          </div><!--<![endif]-->
          </div>
          </div>
          <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
          </div>
          </div>



          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
          </tr>
          </tbody>
          </table>
          <!--[if mso]></div><![endif]-->
          <!--[if IE]></div><![endif]-->
      </body>

    </html>
    `,
    text: `Dear ${data.name}\n
    This is your verification code ${data.code}\n
    
    NB: Company Code must be provided to reset user profile password.\n

    The verification code will only be valid for 15 minutes. please do not share this code with anyone.\n
    Note: if you did not initiate this request, please contact customer service immediately
    `
  };
};

export const beneficiaryApprovedStatusAgentUpdate = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                <p style="font-size: 14px; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.name_of_agent.toUpperCase()}
                                                                                   </span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                We are pleased to inform you that
                                                                <strong>${data.beneficiary_name.toUpperCase()}</strong> a
                                                                memeber of
                                                                <strong>${data.name_of_cooperation.toUpperCase()}</strong>
                                                                on Akilaah has been approved.
                                                                </p>

                                                            </div>
                                                            <br>
                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p
                                                                    style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                    Here are the beneficiarieship details:
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_text_deprecated_1"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 170%; text-align: justify;">
                                                                    <span>
                                                                        <ul
                                                                            style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                            <li>Member Name:
                                                                                ${data.beneficiary_name.toUpperCase()}
                                                                            </li>
                                                                            <li>Email: ${
                                                                              data.email
                                                                            }</li>
                                                                            <li>Member ID: ${
                                                                              data.beneficiary_id
                                                                            }</li>
                                                                            <li>Sponsor: ${
                                                                              data.name_of_cooperation
                                                                            }</li>
                                                                        </ul>
                                                                        <br>
                                                                    </span>
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">
                                                                    Once again, good job! We look forward to your active
                                                                    participation and contributions to your thriving
                                                                    community.

                                                                </p> <br>
                                                                <p>
                                                                    Thank you
                                                                </p> <br>
                                                                <p>The Akilaah team</p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_button_2"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">

                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                        <table border="0" width="100%" height="100%" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td
                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
    `,
    text: `You account has been ${data.status === 'pending' ? 'set to Pending' : data.status} on ${
      data.name_of_cooperation
    }`
  };
};

export const beneficiaryApprovedStatusOrgUpdate = (data) => {
  return {
    html: `
      <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                <p style="font-size: 14px; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}
                                                                                </span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                You have a new beneficiary awaiting approval on our platform.
                                                                The details of the recently registered beneficiary are as
                                                                follows:
                                                            </div>
                                                            <br>
                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p
                                                                    style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                    Here are the beneficiarieship details:
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_text_deprecated_1"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 170%; text-align: justify;">
                                                                    <span>
                                                                        <ul
                                                                            style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                            <li>Member Name:
                                                                                ${data.beneficiary_name.toUpperCase()}
                                                                            </li>
                                                                            <li>Member ID: ${
                                                                              data.beneficiary_id
                                                                            }</li>
                                                                            <li>Registration Date: ${
                                                                              data.date
                                                                            }</li>
                                                                        </ul>
                                                                        <br>
                                                                    </span>
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">
                                                                    To review and approve the registration, please log
                                                                    in to the admin portal and navigate to the pending
                                                                    approvals section.
                                                                </p> <br>
                                                                <p>
                                                                    If you have any questions or need further
                                                                    information, please don't hesitate to contact us at
                                                                    <a
                                                                        href="mailto: ask@akilaah.com">ask@akilaah.com</a>.
                                                                </p> <br>
                                                                <p>Thank you</p>
                                                                <p>The Akilaah team</p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_button_2"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">

                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                        <table border="0" width="100%" height="100%" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td
                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
      `,
    text: `You account has been ${data.status === 'pending' ? 'set to Pending' : data.status} on ${
      data.name_of_cooperation
    }`
  };
};

export const beneficiaryApprovedStatusUpdate = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                <p style="font-size: 14px; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.beneficiary_name.toUpperCase()}
                                                                                    </span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                Congratulations! We are pleased to inform you that your
                                                                beneficiarieship request for
                                                                <strong>${data.name_of_cooperation.toUpperCase()}</strong>
                                                                on Akilaah
                                                                has been approved. Welcome to our esteemed community!
                                                            </div>
                                                            <br>
                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p
                                                                    style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                    Here are the beneficiarieship details:
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_text_deprecated_1"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 170%; text-align: justify;">
                                                                    <span>
                                                                        <ul
                                                                            style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                            <li>Member Name:
                                                                                ${data.beneficiary_name.toUpperCase()}
                                                                            </li>
                                                                            <li>Email: ${
                                                                              data.email
                                                                            }</li>
                                                                            <li>Member ID: ${
                                                                              data.beneficiary_id
                                                                            }</li>
                                                                            <li>Organisation Unique ID: ${
                                                                              data.organization_code
                                                                            }</li>
                                                                            <li>Sponsor Name: ${
                                                                              data.name_of_cooperation
                                                                            }</li>
                                                                        </ul>
                                                                        <br>
                                                                    </span>
                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">
                                                                    Feel free to log in to your account using the
                                                                    following link: [Login URL for beneficiaries]. Your
                                                                    organisation unique ID will be your reference for
                                                                    all interactions within
                                                                    <strong>${data.name_of_cooperation.toUpperCase()}</strong>.
                                                                </p> <br>
                                                                <p>
                                                                    Once again, welcome to <strong>${data.name_of_cooperation.toUpperCase()}</strong> on
                                                                    Akilaah! We look forward to your active
                                                                    participation and contributions to your thriving
                                                                    community.
                                                                </p> <br>
                                                                <p>Thank you</p>
                                                                <p>The Akilaah team</p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_button_2"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">

                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                        <table border="0" width="100%" height="100%" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td
                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
    `,
    text: `You account has been ${data.status === 'pending' ? 'set to Pending' : data.status} on ${
      data.name_of_cooperation
    }`
  };
};

export const declinedAcountMail = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                <p style="font-size: 14px; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.beneficiary_name.toUpperCase()}
                                                                                </span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                We regret to inform you that your registration request
                                                                for Akilaah has been reviewed and, unfortunately, has
                                                                not been accepted at this time.
                                                                <p>
                                                                    Reason for Rejection: <br>
                                                                    [reason for rejection, e.g., incomplete information,
                                                                    failure to meet eligibility criteria, etc.]</p>
                                                            </div>
                                                            <br>
                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">
                                                                    We understand that this news may be disappointing,
                                                                    and we appreciate your interest in joining
                                                                    <strong>${data.name_of_cooperation.toUpperCase()}</strong>
                                                                    on Akilaah. If you believe there
                                                                    may have been an error or if you have further
                                                                    information to support your registration, please
                                                                    feel free to reach out to
                                                                    <strong>${data.name_of_cooperation.toUpperCase()}</strong>

                                                                </p> <br>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p>Thank you for choosing Akilaah</p>
                                                                <p>The Akilaah team</p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_button_2"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">

                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                        <table border="0" width="100%" height="100%" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td
                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
    `,
    text: `You account has been ${data.status} on ${data.name_of_cooperation}`
  };
};

export const agentDeclinedAcountMail = (data) => {
  return {
    html: `
      <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 660px) {
            .u-row {
                width: 640px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-100 {
                width: 640px !important;
            }

        }

        @media (max-width: 660px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: 100% !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }

        @media (max-width: 480px) {
            #u_content_text_deprecated_1 .v-line-height {
                line-height: 170% !important;
            }

            #u_content_button_2 .v-button-colors {
                color: #FFFFFF !important;
                background-color: white !important;
            }

            #u_content_button_2 .v-button-colors:hover {
                color: #FFFFFF !important;
                background-color: #3AAEE0 !important;
            }
        }
    </style>



</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                            alt="Image" title="Image"
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                            width="217" />

                                                                    </td>
                                                                </tr>
                                                                <tr style="border-collapse:collapse">
                                                                    <td align="center"
                                                                        style="padding:5px;Margin:0;font-size:0">
                                                                        <table border="0" width="100%" height="100%"
                                                                            cellpadding="0" cellspacing="0"
                                                                            role="presentation"
                                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                            <tr style="border-collapse:collapse">
                                                                                <td
                                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                <p style="font-size: 14px; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Dear
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.name_of_agent.toUpperCase()}
                                                                                </span></span></strong></span>

                                                                </p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                We regret to inform you that your registration request
                                                                for <strong>${data.beneficiary_name.toUpperCase()}</strong>
                                                                on Akilaah has been reviewed and,
                                                                unfortunately, has not been accepted at this time.
                                                                <p>
                                                                    Reason for Rejection:
                                                                    [reason for rejection, e.g., incomplete information,
                                                                    failure to meet eligibility criteria, etc.]</p>
                                                            </div>
                                                            <br>
                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p
                                                                    style="font-size: 18px; line-height: 150%;">
                                                                    We understand that this news may be disappointing.
                                                                    If you believe there may have been an error or if
                                                                    you have further information to support the
                                                                    registration, please feel free to reach out to
                                                                    <strong>${data.name_of_cooperation.toUpperCase()}</strong>
                                                                </p> <br>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p>Thank you for choosing Akilaah</p>
                                                                <p>The Akilaah team</p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table id="u_content_button_2"
                                                style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">

                                                <tr style="border-collapse:collapse">
                                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                        <table border="0" width="100%" height="100%" cellpadding="0"
                                                            cellspacing="0" role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr style="border-collapse:collapse">
                                                                <td
                                                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div><!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>





                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <div>
                                                    <tbody>
                                                        <tr>
                                                            <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 5px;font-family:arial,helvetica,sans-serif;"
                                                                align="left">

                                                                <div align="center">
                                                        <tr style="border-collapse:collapse">
                                                            <td align="center"
                                                                style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr style="border-collapse:collapse">
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://twitter.com/akilaahdigital"
                                                                                title="twitter" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                    alt="twitter" title="twitter"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                            <a href="https://www.instagram.com/akilaahdigital/"
                                                                                title="Instagram" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                    alt="Instagram" title="Instagram"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                            <a href="https://www.linkedin.com/company/akilaah/"
                                                                                title="linkedin" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                    alt="linkedin" title="linkedin"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                        <td align="left" valign="middle"
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                            <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                title="Facebook" target="_blank">
                                                                                <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                    alt="Facebook" title="Facebook"
                                                                                    width="32"
                                                                                    style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        <tr>
                                                </div>

                </td>
            </tr>
        </tbody>
    </table>

    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
        width="100%" border="0">
        <tbody>
            <tr>
                <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                    align="left">

                    <div class="v-line-height"
                        style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                        <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                2024 MAJ
                                FINTECH Limited RC
                                1731274</span></p>
                    </div>

                </td>
            </tr>
        </tbody>
    </table>

    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>



    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
</body>

</html>
      `,
    text: `You account has been ${data.status} on ${data.name_of_cooperation}`
  };
};

export const onboardAgentMail = (data) => {
  return {
    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 660px) {
      .u-row {
        width: 640px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    ​
      .u-row .u-col-100 {
        width: 640px !important;
      }
    ​
    }
    ​
    @media (max-width: 660px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: 100% !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    ​
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    ​
    p {
      margin: 0;
    }
    ​
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    ​
    * {
      line-height: inherit;
    }
    ​
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    ​
    table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_text_deprecated_1 .v-line-height { line-height: 170% !important; } #u_content_button_2 .v-button-colors { color: #FFFFFF !important; background-color: #e67e23 !important; } #u_content_button_2 .v-button-colors:hover { color: #FFFFFF !important; background-color: #3AAEE0 !important; } }
        </style>
      
      
    ​
    </head>
    ​
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="https://fcyxufp.stripocdn.email/content/guids/CABINET_830dacaf4f7438256f624e7791ce599fbf369dd1c80e947a2258c5ff7c4170cb/images/akilaahlogo_1.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;" width="217"/>
          
        </td>
      </tr>
    </table>
          </td>
        </tr>
      </tbody>
    </table>
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
      
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-line-height" style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 150%; text-align: left;"><span style="font-size: 24px; line-height: 36px;"><span style="color: #444444; line-height: 36px;"><strong><span style="line-height: 36px;">WELCOME TO</span></strong></span><strong><span style="line-height: 36px;"><span style="color: #ec8c30; line-height: 36px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span></p>
      </div>

          </td>
        </tr>
      </tbody>
    </table>
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-line-height" style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 150%; text-align: justify;"><span style="font-size: 14px; line-height: 21px; color: #444444;">Congratulations! You just created an admin account on AKILAAH. Below are your Organisation credentials.</p>
      </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="u_content_text_deprecated_1" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <div class="v-line-height" style="font-size: 14px; line-height: 170%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 170%; text-align: justify;"><span style="font-size: 14px; line-height: 23.8px; color: #444444;">Name of Sponsor: ${
          data.name_of_cooperation
        } <br>AGENT EMAIL: ${data.email}<br>AGENT ID: ${data.agent_id}<br>PASSWORD: ${
      data.password
    }<br>ORGANISATION UNIQUE CODE: ${
      data.company_code
    }<br>ORGANISATION LOGIN URL: <a href="https://agent.akilaah.com/login">Agent Portal</a> </span></p>
      </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table id="u_content_button_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;" align="left">
            
      <!--[if mso]><style>.v-button {background: transparent !important;}</style><![endif]-->
    <div align="center">
      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://organization.akilaah.com" style="height:37px; v-text-anchor:middle; width:122px;" arcsize="11%"  stroke="f" fillcolor="#e67e23"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]--&...`,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://organization.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const newProductMail = (data) => {
  return {
    html: `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
  
      <style type="text/css">
          @media only screen and (min-width: 660px) {
              .u-row {
                  width: 640px !important;
              }
  
              .u-row .u-col {
                  vertical-align: top;
              }
  
              .u-row .u-col-100 {
                  width: 640px !important;
              }
  
          }
  
          @media (max-width: 660px) {
              .u-row-container {
                  max-width: 100% !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
              }
  
              .u-row .u-col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
              }
  
              .u-row {
                  width: 100% !important;
              }
  
              .u-col {
                  width: 100% !important;
              }
  
              .u-col>div {
                  margin: 0 auto;
              }
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          table,
          tr,
          td {
              vertical-align: top;
              border-collapse: collapse;
          }
  
          p {
              margin: 0;
          }
  
          .ie-container table,
          .mso-container table {
              table-layout: fixed;
          }
  
          * {
              line-height: inherit;
          }
  
          a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
          }
  
          table,
          td {
              color: #000000;
          }
  
          #u_body a {
              color: #0000ee;
              text-decoration: underline;
          }
  
          @media (max-width: 480px) {
              #u_content_text_deprecated_1 .v-line-height {
                  line-height: 170% !important;
              }
  
              #u_content_button_2 .v-button-colors {
                  color: #FFFFFF !important;
                  background-color: white !important;
              }
  
              #u_content_button_2 .v-button-colors:hover {
                  color: #FFFFFF !important;
                  background-color: #3AAEE0 !important;
              }
          }
      </style>
  
  
  
  </head>
  
  <body class="clean-body u_body"
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body"
          style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
          cellpadding="0" cellspacing="0">
          <tbody>
              <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <table width="100%" cellpadding="0" cellspacing="0"
                                                                  border="0">
                                                                  <tr>
                                                                      <td style="padding-right: 0px;padding-left: 0px;"
                                                                          align="center">
  
                                                                          <img align="center" border="0"
                                                                              src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                              alt="Image" title="Image"
                                                                              style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                              width="217" />
  
                                                                      </td>
                                                                  </tr>
                                                                  <tr style="border-collapse:collapse">
                                                                      <td align="center"
                                                                          style="padding:5px;Margin:0;font-size:0">
                                                                          <table border="0" width="100%" height="100%"
                                                                              cellpadding="0" cellspacing="0"
                                                                              role="presentation"
                                                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td
                                                                                      style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                  <p
                                                                      style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                      <span
                                                                          style="font-size: 24px; line-height: 36px;"><span
                                                                              style="color:#002366; line-height: 21px;"><strong><span
                                                                                      style="line-height: 21px;">Dear
                                                                                  </span></strong></span><strong><span
                                                                                  style="line-height: 21px;"><span
                                                                                      style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>
  
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p style="font-size: 18px; line-height: 150%;"></p>
                                                                  We are pleased to inform you that a new contribution
                                                                  product <strong>${
                                                                    data.product_name
                                                                  }</strong> has been successfully created on
                                                                  Akilaah. This product is now available within the
                                                                  Contribution Module for beneficiaries to engage with.
                                                              </div>
                                                              <br>
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p
                                                                      style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                      Here are the details of the newly created
                                                                      contribution product:
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_deprecated_1"
                                                  style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; text-align: justify;">
                                                                      <span>
                                                                          <ul
                                                                              style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                              <li>Product Name:
                                                                                  ${
                                                                                    data.product_name
                                                                                  }
                                                                              </li>
                                                                              <li>Product ID: ${
                                                                                data.product_id
                                                                              }</li>
                                                                              <li>Creation Date: ${
                                                                                data.date
                                                                              }</li>
                                                                              <li>Status: ${
                                                                                data.status
                                                                              }</li>
                                                                          </ul>
                                                                          <br>
                                                                      </span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p style="font-size: 18px; line-height: 150%;">
                                                                      You can review and manage this product through the
                                                                      admin portal. If you have any questions or require
                                                                      further assistance, feel free to contact our support
                                                                      team at<a
                                                                          href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                  </p>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_button_2"
                                                  style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tr style="border-collapse:collapse">
                                                      <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                          <table border="0" width="100%" height="100%" cellpadding="0"
                                                              cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                              <tr style="border-collapse:collapse">
                                                                  <td
                                                                      style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <div>
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">
  
                                                                  <div align="center">
                                                          <tr style="border-collapse:collapse">
                                                              <td align="center"
                                                                  style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                  <table cellpadding="0" cellspacing="0"
                                                                      class="es-table-not-adapt es-social"
                                                                      role="presentation"
                                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                      <tr style="border-collapse:collapse">
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                              <a href="https://twitter.com/akilaahdigital"
                                                                                  title="twitter" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                      alt="twitter" title="twitter"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                              <a href="https://www.instagram.com/akilaahdigital/"
                                                                                  title="Instagram" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                      alt="Instagram" title="Instagram"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                              <a href="https://www.linkedin.com/company/akilaah/"
                                                                                  title="linkedin" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                      alt="linkedin" title="linkedin"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                              <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                  title="Facebook" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                      alt="Facebook" title="Facebook"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                          <tr>
                                                  </div>
  
                  </td>
              </tr>
          </tbody>
      </table>
  
      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
          width="100%" border="0">
          <tbody>
              <tr>
                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                      align="left">
  
                      <div class="v-line-height"
                          style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                          <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                  2024 MAJ
                                  FINTECH Limited RC
                                  1731274</span></p>
                      </div>
  
                  </td>
              </tr>
          </tbody>
      </table>
  
      <!--[if (!mso)&(!IE)]><!-->
      </div><!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
  
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
      `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://organization.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const newSubscriptionProductMail = (data) => {
  return {
    html: `
      <!DOCTYPE HTML
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
  
      <style type="text/css">
          @media only screen and (min-width: 660px) {
              .u-row {
                  width: 640px !important;
              }
  
              .u-row .u-col {
                  vertical-align: top;
              }
  
              .u-row .u-col-100 {
                  width: 640px !important;
              }
  
          }
  
          @media (max-width: 660px) {
              .u-row-container {
                  max-width: 100% !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
              }
  
              .u-row .u-col {
                  min-width: 320px !important;
                  max-width: 100% !important;
                  display: block !important;
              }
  
              .u-row {
                  width: 100% !important;
              }
  
              .u-col {
                  width: 100% !important;
              }
  
              .u-col>div {
                  margin: 0 auto;
              }
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          table,
          tr,
          td {
              vertical-align: top;
              border-collapse: collapse;
          }
  
          p {
              margin: 0;
          }
  
          .ie-container table,
          .mso-container table {
              table-layout: fixed;
          }
  
          * {
              line-height: inherit;
          }
  
          a[x-apple-data-detectors='true'] {
              color: inherit !important;
              text-decoration: none !important;
          }
  
          table,
          td {
              color: #000000;
          }
  
          #u_body a {
              color: #0000ee;
              text-decoration: underline;
          }
  
          @media (max-width: 480px) {
              #u_content_text_deprecated_1 .v-line-height {
                  line-height: 170% !important;
              }
  
              #u_content_button_2 .v-button-colors {
                  color: #FFFFFF !important;
                  background-color: white !important;
              }
  
              #u_content_button_2 .v-button-colors:hover {
                  color: #FFFFFF !important;
                  background-color: #3AAEE0 !important;
              }
          }
      </style>
  
  
  
  </head>
  
  <body class="clean-body u_body"
      style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body"
          style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
          cellpadding="0" cellspacing="0">
          <tbody>
              <tr style="vertical-align: top">
                  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <table width="100%" cellpadding="0" cellspacing="0"
                                                                  border="0">
                                                                  <tr>
                                                                      <td style="padding-right: 0px;padding-left: 0px;"
                                                                          align="center">
  
                                                                          <img align="center" border="0"
                                                                              src="https://i.stack.imgur.com/FwiZi.jpg"
                                                                              alt="Image" title="Image"
                                                                              style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                                                              width="217" />
  
                                                                      </td>
                                                                  </tr>
                                                                  <tr style="border-collapse:collapse">
                                                                      <td align="center"
                                                                          style="padding:5px;Margin:0;font-size:0">
                                                                          <table border="0" width="100%" height="100%"
                                                                              cellpadding="0" cellspacing="0"
                                                                              role="presentation"
                                                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td
                                                                                      style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                  <p
                                                                      style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                      <span
                                                                          style="font-size: 24px; line-height: 36px;"><span
                                                                              style="color:#002366; line-height: 21px;"><strong><span
                                                                                      style="line-height: 21px;">Dear
                                                                                  </span></strong></span><strong><span
                                                                                  style="line-height: 21px;"><span
                                                                                      style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>
  
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p style="font-size: 18px; line-height: 150%;"></p>
                                                                  We are pleased to inform you that a new subscription
                                                                  product <strong>${
                                                                    data.product_name
                                                                  }</strong> has been successfully created on
                                                                  Akilaah. This product is now available within the
                                                                  Subscription Module for beneficiaries to engage with.
                                                              </div>
                                                              <br>
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p
                                                                      style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                      Here are the details of the newly created
                                                                      subscription product:
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_text_deprecated_1"
                                                  style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                                                  <p style="font-size: 14px; text-align: justify;">
                                                                      <span>
                                                                          <ul
                                                                              style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                                                              <li>Product Name:
                                                                                  ${
                                                                                    data.product_name
                                                                                  }
                                                                              </li>
                                                                              <li>Product ID: ${
                                                                                data.product_id
                                                                              }</li>
                                                                              <li>Creation Date: ${
                                                                                data.date
                                                                              }</li>
                                                                              <li>Status: ${
                                                                                data.status
                                                                              }</li>
                                                                          </ul>
                                                                          <br>
                                                                      </span>
                                                                  </p>
                                                              </div>
  
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tbody>
                                                      <tr>
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p style="font-size: 18px; line-height: 150%;">
                                                                      You can review and manage this product through the
                                                                      admin portal. If you have any questions or require
                                                                      further assistance, feel free to contact our support
                                                                      team at<a
                                                                          href="mailto: ask@akilaah.com">ask@akilaah.com</a>
                                                                  </p>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
  
                                              <table id="u_content_button_2"
                                                  style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <tr style="border-collapse:collapse">
                                                      <td align="center" style="padding:5px;Margin:0;font-size:0">
                                                          <table border="0" width="100%" height="100%" cellpadding="0"
                                                              cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                              <tr style="border-collapse:collapse">
                                                                  <td
                                                                      style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </table>
                                              <!--[if (!mso)&(!IE)]><!-->
                                          </div><!--<![endif]-->
                                      </div>
                                  </div>
                                  <!--[if (mso)|(IE)]></td><![endif]-->
                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                              </div>
                          </div>
                      </div>
  
  
  
  
  
                      <div class="u-row-container" style="padding: 0px;background-color: transparent">
                          <div class="u-row"
                              style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                              <div
                                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                  <div class="u-col u-col-100"
                                      style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                                      <div style="height: 100%;width: 100% !important;">
                                          <!--[if (!mso)&(!IE)]><!-->
                                          <div
                                              style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                              <!--<![endif]-->
  
                                              <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                  cellpadding="0" cellspacing="0" width="100%" border="0">
                                                  <div>
                                                      <tbody>
                                                          <tr>
                                                              <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                                                  align="left">
  
                                                                  <div align="center">
                                                          <tr style="border-collapse:collapse">
                                                              <td align="center"
                                                                  style="padding-bottom: 30px;Margin:0;font-size:0">
                                                                  <table cellpadding="0" cellspacing="0"
                                                                      class="es-table-not-adapt es-social"
                                                                      role="presentation"
                                                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                      <tr style="border-collapse:collapse">
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                              <a href="https://twitter.com/akilaahdigital"
                                                                                  title="twitter" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                                                                      alt="twitter" title="twitter"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                                                              <a href="https://www.instagram.com/akilaahdigital/"
                                                                                  title="Instagram" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                                                      alt="Instagram" title="Instagram"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                                                              <a href="https://www.linkedin.com/company/akilaah/"
                                                                                  title="linkedin" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                                                      alt="linkedin" title="linkedin"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                          <td align="left" valign="middle"
                                                                              style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                              <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                                                                  title="Facebook" target="_blank">
                                                                                  <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                                                                      alt="Facebook" title="Facebook"
                                                                                      width="32"
                                                                                      style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                              </a>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                          <tr>
                                                  </div>
  
                  </td>
              </tr>
          </tbody>
      </table>
  
      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
          width="100%" border="0">
          <tbody>
              <tr>
                  <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
                      align="left">
  
                      <div class="v-line-height"
                          style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
                          <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                                  2024 MAJ
                                  FINTECH Limited RC
                                  1731274</span></p>
                      </div>
  
                  </td>
              </tr>
          </tbody>
      </table>
  
      <!--[if (!mso)&(!IE)]><!-->
      </div><!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
  
  
  
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
      `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://organization.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const newSavingsProductMail = (data) => {
  return {
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
    <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 660px) {
        .u-row {
          width: 640px !important;
        }
  
        .u-row .u-col {
          vertical-align: top;
        }
  
        .u-row .u-col-100 {
          width: 640px !important;
        }
  
      }
  
      @media (max-width: 660px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
  
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
  
        .u-row {
          width: 100% !important;
        }
  
        .u-col {
          width: 100% !important;
        }
  
        .u-col>div {
          margin: 0 auto;
        }
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }
  
      p {
        margin: 0;
      }
  
      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }
  
      * {
        line-height: inherit;
      }
  
      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
  
      table,
      td {
        color: #000000;
      }
  
      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }
  
      @media (max-width: 480px) {
        #u_content_text_deprecated_1 .v-line-height {
          line-height: 170% !important;
        }
  
        #u_content_button_2 .v-button-colors {
          color: #FFFFFF !important;
          background-color: white !important;
        }
  
        #u_content_button_2 .v-button-colors:hover {
          color: #FFFFFF !important;
          background-color: #3AAEE0 !important;
        }
      }
    </style>
  
  
  
  </head>
  
  <body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%"
      cellpadding="0" cellspacing="0">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
  
  
  
            <div class="u-row-container" style="padding: 0px;background-color: transparent">
              <div class="u-row"
                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #FFFFFF;">
                <div
                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                    <div style="height: 100%;width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                        <!--<![endif]-->
  
                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 20px;font-family:arial,helvetica,sans-serif;"
                                align="left">
  
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td style="padding-right: 0px;padding-left: 0px;" align="center">
  
                                      <img align="center" border="0" src="https://i.stack.imgur.com/FwiZi.jpg" alt="Image"
                                        title="Image"
                                        style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 217px;"
                                        width="217" />
  
                                    </td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td align="center" style="padding:5px;Margin:0;font-size:0">
                                      <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
                                        role="presentation"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                        <tr style="border-collapse:collapse">
                                          <td
                                            style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <!--[if (!mso)&(!IE)]><!-->
                      </div><!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
  
  
  
  
  
            <div class="u-row-container" style="padding: 0px;background-color: transparent">
              <div class="u-row"
                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                <div
                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                    <div style="height: 100%;width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                        <!--<![endif]-->
  
                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:25px;font-family:arial,helvetica,sans-serif;"
                                align="left">
  
                                <div class="v-line-height"
                                  style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                  <p style="font-size: 14px; line-height: 150%; text-align: left;">
                                    <span style="font-size: 24px; line-height: 36px;"><span
                                        style="color:#002366; line-height: 21px;"><strong><span
                                            style="line-height: 21px;">Dear
                                          </span></strong></span><strong><span style="line-height: 21px;"><span
                                            style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation.toUpperCase()}</span></span></strong></span>
  
                                  </p>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                align="left">
  
                                <div class="v-line-height"
                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                  <p style="font-size: 18px; line-height: 150%;"></p>
                                  We want to inform you that the bulk upload for the Savings
                                  Module has been successfully processed. The savings from
                                  the uploaded data have been added to the system.
                                  </p>
  
                                </div>
                                <br>
                                <div class="v-line-height"
                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                  <p style="font-size: 18px; line-height: 150%; text-align: justify;">
                                    Here are the details of the bulk upload:
                                  </p>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table id="u_content_text_deprecated_1" style="font-family:arial,helvetica,sans-serif;"
                          role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 0px;font-family:arial,helvetica,sans-serif;"
                                align="left">
  
                                <div class="v-line-height"
                                  style="font-size: 14px; text-align: left; word-wrap: break-word;">
                                  <p style="font-size: 14px; text-align: justify;">
                                    <span>
                                      <ul style="font-size: 14px; line-height: 23.8px; color: #002366;">
                                        <li>Upload Date:
                                          ${data.date}
                                        </li>
                                        <li>Number of Savings Uploaded: ${data.number}</li>
                                        <li>Status: ${data.status}</li>
                                      </ul>
                                      <br>
                                    </span>
                                  </p>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td
                                style="overflow-wrap:break-word;word-break:break-word;padding:10px 25px 15px;font-family:arial,helvetica,sans-serif;"
                                align="left">
  
                                <div class="v-line-height"
                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                  <p style="font-size: 18px; line-height: 150%;">
                                    If you encounter any discrepancies or have questions
                                    regarding the uploaded data, please review the
                                    information in the admin portal. Additionally, our
                                    support team is available to assist you if needed.
                                  </p><br>
                                  <p>Thank You</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table id="u_content_button_2" style="font-family:arial,helvetica,sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tr style="border-collapse:collapse">
                            <td align="center" style="padding:5px;Margin:0;font-size:0">
                              <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
                                role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr style="border-collapse:collapse">
                                  <td
                                    style="padding:0;Margin:0;border-bottom:2px solid #002366;background:unset;height:1px;width:100%;margin:0px">
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div><!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
  
  
  
  
  
            <div class="u-row-container" style="padding: 0px;background-color: transparent">
              <div class="u-row"
                style="margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: white;">
                <div
                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px;"><tr style="background-color: #e67e23;"><![endif]-->
  
                  <!--[if (mso)|(IE)]><td align="center" width="640" style="width: 640px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
                    <div style="height: 100%;width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                        <!--<![endif]-->
  
                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <div>
                            <tbody>
                              <tr>
                                <td
                                  style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 18px;font-family:arial,helvetica,sans-serif;"
                                  align="left">
  
                                  <div align="center">
                              <tr style="border-collapse:collapse">
                                <td align="center" style="padding-bottom: 30px;Margin:0;font-size:0">
                                  <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"
                                    role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                      <td align="left" valign="middle"
                                        style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                        <a href="https://twitter.com/akilaahdigital" title="twitter" target="_blank">
                                          <img src="https://cdn.tools.unlayer.com/social/icons/circle/twitter.png"
                                            alt="twitter" title="twitter" width="32"
                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                        </a>
                                      </td>
                                      <td align="left" valign="middle"
                                        style="word-break: break-word;border-collapse: collapse !important;vertical-align: top; padding-right:10px">
                                        <a href="https://www.instagram.com/akilaahdigital/" title="Instagram"
                                          target="_blank">
                                          <img src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                            alt="Instagram" title="Instagram" width="32"
                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                        </a>
                                      </td>
                                      <td align="left" valign="middle"
                                        style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right:10px">
                                        <a href="https://www.linkedin.com/company/akilaah/" title="linkedin"
                                          target="_blank">
                                          <img src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                            alt="linkedin" title="linkedin" width="32"
                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                        </a>
                                      </td>
                                      <td align="left" valign="middle"
                                        style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                        <a href="https://www.facebook.com/profile.php?id=61551381704492&mibextid=ZbWKwL"
                                          title="Facebook" target="_blank">
                                          <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png"
                                            alt="Facebook" title="Facebook" width="32"
                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                              <tr>
                          </div>
  
          </td>
        </tr>
      </tbody>
    </table>
  
    <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0"
      width="100%" border="0">
      <tbody>
        <tr>
          <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;"
            align="left">
  
            <div class="v-line-height"
              style="font-size: 11px; line-height: 140%; text-align: center; word-wrap: break-word;">
              <p style="line-height: 140%;"><span style="color: #002366; line-height: 19.6px;">Copyright Ⓒ
                  2024 MAJ
                  FINTECH Limited RC
                  1731274</span></p>
            </div>
  
          </td>
        </tr>
      </tbody>
    </table>
  
    <!--[if (!mso)&(!IE)]><!-->
    </div><!--<![endif]-->
    </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
    </div>
    </div>
  
  
  
    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
    </tr>
    </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
  
  </html>
      `,
    text: `welcome to MAJFINTECH Onboarding\n
  Your login Credentials can be seen below\n
  \n
  Name of Coopoeration</strong>: ${data.name}\n
  email: ${data.email}\n
  password:${data.password}\n
  company Unique Code:${data.company_code}\n
  Login url: https://organization.akilaah.com \n\n
  NB: You Company Unique code should be share to beneficiaries `
  };
};

export const paymentReceiptMail = (data) => {
  return paymentReceiptHTML
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{name}}', data.beneficiary_name)
    .replace('{{product_name}}', data.product_name)
    .replace('{{initial_amount}}', data.initial_amount)
    .replace('{{amount}}', data.amount)
    .replace('{{date}}', data.date);
};

export const paymentWarningsMail = (data) => {
  return paymentWarningHTML
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{name}}', data.beneficiary_name)
    .replace('{{product_name}}', data.product_name)
    .replace('{{initial_amount}}', data.initial_amount)
    .replace('{{amount}}', data.amount)
    .replace('{{date}}', data.date);
};

export const directDebitInitiationMail = (data) => {
  return directDebitWarningsHTML
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{name}}', data.beneficiary_name)
    .replace('{{product_name}}', data.product_name)
    .replace('{{initial_amount}}', data.initial_amount)
    .replace('{{amount}}', data.amount)
    .replace('{{date}}', data.date);
};

export const withrawalMail = (data) => {
  return withdrawalReceiptHTML
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{name}}', data.beneficiary_name)
    .replace('{{product_name}}', data.product_name)
    .replace('{{initial_amount}}', data.initial_amount)
    .replace('{{amount}}', data.amount)
    .replace('{{date}}', data.date);
};

export const beneficiaryOnboardingMail = (data) => {
  return beneficiaryOnboardingHTML
    .replace('{{name}}', data.cooperative_name)
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{beneficiary_name}}', data.beneficiary_name)
    .replace('{{email}}', data.email)
    .replace('{{phone}}', data.phone)
    .replace('{{date}}', data.date);
};

export const agentChooseorganizationOnboardingMail = (data) => {
  return agentChooseorganizationOnboardingHTML
    .replace('{{name}}', data.cooperative_name)
    .replace('{{agent_name}}', data.agent_name)
    .replace('{{agent_email}}', data.agent_email)
    .replace('{{agent_phone}}', data.agent_phone)
    .replace('{{date}}', data.date);
};

export const organizationChoosesAgentOnboardingMail = (data) => {
  return organizationChoosesAgentOnboardingHTML
    .replace('{{name}}', data.agent_name)
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{org_name}}', data.org_name)
    .replace('{{org_email}}', data.org_email)
    .replace('{{org_phone}}', data.org_phone)
    .replace('{{date}}', data.date);
};

export const acctApprovalMail = (data) => {
  return acctApprovalHTML
    .replace('{{name}}', data.name)
    .replace('{{color_code}}', data.color_code)
    .replace('{{acctstatus}}', data.acctstatus)
    .replace('{{phone}}', data.phone)
    .replace('{{date}}', data.date);
};

export const loanRequestMailer = (data) => {
  return loanRequestHTML
    .replace('{{name}}', data.cooperative_name)
    .replace('{{cooperative_name}}', data.cooperative_name.toLowerCase())
    .replace('{{beneficiary_name}}', data.beneficiary_name)
    .replace('{{acctstatus}}', data.acctstatus)
    .replace('{{phone}}', data.phone)
    .replace('{{request_amount}}', data.request_amount)
    .replace('{{frequency}}', data.frequency)
    .replace('{{amount}}', data.amount)
    .replace('{{payment_date}}', data.payment_date)
    .replace('{{date}}', data.date);
};

export const loanStatusUpdateMail = (data) => {
  return loanStatusUpdateHTML
    .replace('{{name}}', data.beneficiary_name)
    .replace('{{cooperative_name}}', data.cooperative_name)
    .replace('{{beneficiary_name}}', data.beneficiary_name)
    .replace('{{loan_status}}', data.loan_status)
    .replace('{{phone}}', data.phone)
    .replace('{{request_amount}}', data.request_amount)
    .replace('{{frequency}}', data.frequency)
    .replace('{{amount}}', data.amount)
    .replace('{{payment_date}}', data.payment_date)
    .replace('{{date}}', data.date);
};
