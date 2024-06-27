import {
  acctApprovalHTML,
  agentChooseorganizationOnboardingHTML,
  directDebitWarningsHTML,
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
                                                                                            style="color: #CB6015; line-height: 21px;">${data.name}</span></span></strong></span>
  
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
                                                                        sponsor and We are thrilled to welcome you to our
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
                                                                                    
                                                                                    <li>Email: ${data.email}</li>
                                                                                    <li>Sponsor Unique Code: ${data.company_code} (This is your secret pass into your
                                                                                        portal; please ensure its
                                                                                        confidentiality as it is required for
                                                                                        every login of your beneficiaries)</li>
                                                                                    
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
                                                                            <a href="mailto:ask@akilaah.com" style="color: blue;">ask@akilaah.com</a>
  
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
  
export const beneficaryOnboardinMail = (data) => {
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
                                                                                              style="color: #CB6015; line-height: 21px;">${data.name}</span></span></strong></span>
    
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
                                                                                      
                                                                                      <li>Email: ${data.email}</li>
                                                                                      <li>Password: ${data.password}</li>
                                                                                      <li>Sponsor Unique Code: ${data.company_code} (This is your secret pass into your
                                                                                          beneficiary portal; please ensure its
                                                                                          confidentiality as it is required for
                                                                                          every login of your beneficiaries)</li>
                                                                                     
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
                                                                              <a href="mailto:ask@akilaah.com" style="color: blue;">ask@akilaah.com</a>
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
                                                                          <a href="https://beneficiary.akilaah.com/login"
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
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:2px 25px 2px;font-family:arial,helvetica,sans-serif;"
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
                                                                                      style="color: #CB6015; line-height: 21px;">${data.name}</span></span></strong></span>
  
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
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:2px 25px 2px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p style="font-size: 18px; line-height: 150%;"></p>
                                                                  <strong>${data.name_of_cooperation}</strong> invites you
                                                                  to join their community! Here are your login
                                                                  details:
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
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:5px 25px 5px ;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 14px; line-height: 170%; text-align: left; word-wrap: break-word;">
                                                                  <p
                                                                      style="font-size: 14px; line-height: 170%; text-align: justify;">
                                                                      <span>
                                                                          <ul
                                                                              style="font-size: 14px; line-height: 23.8px; color: #002366;">
  
                                                                              <li>Email: ${data.email}</li>
                                                                              <li>Password: ${data.password}</li>
                                                                              <li>Sponsor Unique Code:
                                                                                  ${data.company_code} (This is your
                                                                                  secret pass into your
                                                                                  beneficiary portal; please ensure its
                                                                                  confidentiality as it is required for
                                                                                  every login of your beneficiaries)</li>
                                                                              <li>URL: <a
                                                                                      href="https://akilaah-beneficiary.vercel.app/login?company_code=${data.company_code}"
                                                                                      style="color: blue;">https://akilaah-beneficiary.vercel.app/login?company_code=${data.company_code}</a>
                                                                              </li>
                                                                          </ul>
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
                                                          <td style="overflow-wrap:break-word;word-break:break-word;padding:1px 25px 1px;font-family:arial,helvetica,sans-serif;"
                                                              align="left">
  
                                                              <div class="v-line-height"
                                                                  style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                  <p style="font-size: 18px; line-height: 150%;">
                                                                      Please keep this information secure. Use your
                                                                      Sponsor Code to access your beneficiary portal.
                                                                      Explore and enjoy your experience on AKILAAH.
                                                                      For support, you can contact
                                                                      <a href="mailto:ask@akilaah.com"
                                                                          style="color: blue;">ask@akilaah.com</a>
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
                                                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://sponsor.akilaah.com" style="height:37px; v-text-anchor:middle; width:122px;" arcsize="11%"  stroke="f" fillcolor="#e67e23"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
                                                                  <a href="https://beneficiary.akilaah.com/login"
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

export const newProjectCreationEmail = (data) => {
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                            <p
                                                                                style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                                <span
                                                                                    style="font-size: 24px; line-height: 36px;"><span
                                                                                        style="color:#002366; line-height: 21px;"><strong><span
                                                                                                style="line-height: 21px;">Hi,
                                                                                            </span></strong></span><strong><span
                                                                                            style="line-height: 21px;"><span
                                                                                                style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;"></p>
                                                                            We are excited to inform you that a new project,
                                                                            <span><strong>${data.project_name}</strong></span>, has
                                                                            been created.
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;">
                                                                                We are looking forward to a successful project and
                                                                                significant achievements. You can access the project
                                                                                details and timeline in your account.
                                                                            </p> <br>
                                                                            Thanks for choosing us,
                                                                            <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are excited to inform you that a new project, ${data.project_name}, has been created.\n
        
        We are looking forward to a successful project and significant achievements. You can access the project details and timeline in your account.\n
        
        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const succefulProjectAwardedEmail = (data) => {
    return {
      html: 
        `
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                            <p
                                                                                style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                                <span
                                                                                    style="font-size: 24px; line-height: 36px;"><span
                                                                                        style="color:#002366; line-height: 21px;"><strong><span
                                                                                                style="line-height: 21px;">Hi,
                                                                                            </span></strong></span><strong><span
                                                                                            style="line-height: 21px;"><span
                                                                                                style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;"></p>
                                                                            We are pleased to inform you that beneficiaries has been
                                                                            successfully awarded to the
                                                                            <span><strong>${data.project_name}</strong></span>
                                                                            project.
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;">
                                                                                This award marks an important milestone, and we are
                                                                                excited about the positive impact you will bring
                                                                                through the project.
                                                                            </p> <br>
                                                                            Thanks for choosing us,
                                                                            <p>Akilaah Team</p>
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
      text: `Dear ${data.sponsor_name}\n
        We are pleased to inform you that beneficiaries has been successfully awarded the 
        ${data.project_name} project\n.
        
        This award marks an important milestone, and we are excited about the positive impact you will bring through the project.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const beneficiarySuccefullyAllocatedEmail = (data) => {
    return {
      html: 
        `
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                            <p
                                                                                style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                                <span
                                                                                    style="font-size: 24px; line-height: 36px;"><span
                                                                                        style="color:#002366; line-height: 21px;"><strong><span
                                                                                                style="line-height: 21px;">Hi,
                                                                                            </span></strong></span><strong><span
                                                                                            style="line-height: 21px;"><span
                                                                                                style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;"></p>
                                                                            We are pleased to inform you that beneficiaries has been
                                                                            successfully allocated to the
                                                                            <span><strong>${data.project_name}</strong></span>
                                                                            project.
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;">
                                                                                This allocation marks an important milestone, and we
                                                                                are excited about the positive impact you will bring
                                                                                through the project.
                                                                            </p> <br>
                                                                            Thanks for choosing us,
                                                                            <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are pleased to inform you that beneficiaries has been successfully allocated the 
        ${data.project_name} project\n.
        
        This allocation marks an important milestone, and we are excited about the positive impact you will bring through the project.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const batchDeliveryCreatedEmail = (data) => {
    return {
      html: 
        `
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
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 36px;"><span
                                                                            style="color:#002366; line-height: 21px;"><strong><span
                                                                                    style="line-height: 21px;">Hi,
                                                                                </span></strong></span><strong><span
                                                                                style="line-height: 21px;"><span
                                                                                    style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;"></p>
                                                                We are pleased to inform you that a new batch delivery
                                                                <span><strong>${data.batch_delivery_number}</strong></span>
                                                                has been created for the
                                                                <span><strong>${data.project_name}</strong></span>
                                                                project.
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                            align="left">

                                                            <div class="v-line-height"
                                                                style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                <p style="font-size: 18px; line-height: 150%;">
                                                                    This milestone is a crucial step in ensuring the
                                                                    project's timely and successful completion. Detailed
                                                                    information about the batch delivery can be accessed
                                                                    through your account.
                                                                </p> <br>
                                                                Thanks for choosing us,
                                                                <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are pleased to inform you that a new batch delivery ${data.batch_delivery_number} has\n
        been created for the ${data.project_name} project.\n
        
        This milestone is a crucial step in ensuring the project's timely and successful completion.\n
        Detailed information about the batch delivery can be accessed through your account.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const batchDeliveryStartedEmail = (data) => {
    return {
      html: 
        `
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                            <p
                                                                                style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                                <span
                                                                                    style="font-size: 24px; line-height: 36px;"><span
                                                                                        style="color:#002366; line-height: 21px;"><strong><span
                                                                                                style="line-height: 21px;">Hi,
                                                                                            </span></strong></span><strong><span
                                                                                            style="line-height: 21px;"><span
                                                                                                style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;"></p>
                                                                            We are pleased to inform you that the batch delivery
                                                                            <span><strong>${data.batch_delivery_number}</strong></span>
                                                                            for the
                                                                            <span><strong>${data.project_name}</strong></span>
                                                                            project has officially started.
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;">
                                                                                This is a significant progress milestone, and we are
                                                                                looking forward to its successful completion. You
                                                                                can access detailed information about the batch
                                                                                delivery through your account.
                                                                            </p> <br>
                                                                            Thanks for choosing us,
                                                                            <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are pleased to inform you that the batch delivery ${data.batch_delivery_number} for\n
        the ${data.project_name} project has officially started.\n
        
        This is a significant progress milestone, and we are looking forward to its\n 
        successful completion. You can access detailed information about the batch delivery\n 
        through your account.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const batchDeliveryCompletedEmail = (data) => {
    return {
      html: 
        `
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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                            <p
                                                                                style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                                <span
                                                                                    style="font-size: 24px; line-height: 36px;"><span
                                                                                        style="color:#002366; line-height: 21px;"><strong><span
                                                                                                style="line-height: 21px;">Hi,
                                                                                            </span></strong></span><strong><span
                                                                                            style="line-height: 21px;"><span
                                                                                                style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;"></p>
                                                                            We are pleased to inform you that the batch delivery
                                                                            <span><strong>${data.batch_delivery_number}</strong></span>
                                                                            for the
                                                                            <span><strong>${data.project_name}</strong></span>
                                                                            project has been successfully disbursed in full.
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                        align="left">

                                                                        <div class="v-line-height"
                                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                            <p style="font-size: 18px; line-height: 150%;">
                                                                                This marks a key milestone in the project's
                                                                                progress. Detailed information regarding the
                                                                                disbursement can be accessed through your account.
                                                                            </p> <br>
                                                                            Thanks for choosing us,
                                                                            <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are pleased to inform you that the batch delivery ${data.batch_delivery_number} for\n
        the ${data.project_name} project has been successfully disbursed in full.\n
        
        This marks a key milestone in the project's progress. Detailed information\n
        regarding the disbursement can be accessed through your account.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const batchDeliveryClosedEmail = (data) => {
    return {
      html: 
        `
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
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                        <p
                                                                            style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                            <span
                                                                                style="font-size: 24px; line-height: 36px;"><span
                                                                                    style="color:#002366; line-height: 21px;"><strong><span
                                                                                            style="line-height: 21px;">Hi,
                                                                                        </span></strong></span><strong><span
                                                                                        style="line-height: 21px;"><span
                                                                                            style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p style="font-size: 18px; line-height: 150%;"></p>
                                                                        We are pleased to inform you that the batch delivery
                                                                        <span><strong>${data.batch_delivery_number}</strong></span>
                                                                        for the
                                                                        <span><strong>${data.project_name}</strong></span>
                                                                        project, which began on
                                                                        <span><strong>${data.start_date}</strong></span>, has
                                                                        been successfully closed.
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p style="font-size: 18px; line-height: 150%;">
                                                                            This marks the completion of this delivery phase,
                                                                            and all related documentation and details have been
                                                                            securely stored for future reference. You can access
                                                                            this information through your account.
                                                                        </p> <br>
                                                                        Thanks for choosing us,
                                                                        <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are pleased to inform you that the batch delivery ${data.batch_delivery_number} for\n
        the ${data.project_name} project, which began on ${data.start_date}, has been successfully closed.\n
        
        This marks the completion of this delivery phase, and all related\n
        documentation and details have been securely stored for future reference.\n
        You can access this information through your account.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const batchDeliveryDeletedEmail = (data) => {
    return {
      html: 
        `
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
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                        align="left">

                                                        <div class="v-line-height"
                                                            style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                            <p
                                                                style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                <span
                                                                    style="font-size: 24px; line-height: 36px;"><span
                                                                        style="color:#002366; line-height: 21px;"><strong><span
                                                                                style="line-height: 21px;">Hi,
                                                                            </span></strong></span><strong><span
                                                                            style="line-height: 21px;"><span
                                                                                style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                        align="left">

                                                        <div class="v-line-height"
                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                            <p style="font-size: 18px; line-height: 150%;"></p>
                                                            We are pleased to inform you that the batch delivery
                                                            <span><strong>${data.batch_delivery_number}</strong></span>
                                                            for the
                                                            <span><strong>${data.project_name}</strong></span>
                                                            project, which began on
                                                            <span><strong>${data.start_date}</strong></span>, has
                                                            been deleted.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                            cellpadding="0" cellspacing="0" width="100%" border="0">
                                            <tbody>
                                                <tr>
                                                    <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 3px;font-family:arial,helvetica,sans-serif;"
                                                        align="left">

                                                        <div class="v-line-height"
                                                            style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                            <p style="font-size: 18px; line-height: 150%;">
                                                                All relevant parties have been informed. For more
                                                                details, please log in to your account.
                                                            </p> <br>
                                                            Thanks for choosing us,
                                                            <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are writing to inform you that the batch delivery ${data.batch_delivery_number} for\n
        the ${data.project_name} project, which began on ${data.start_date}, has been deleted.\n
        
        All relevant parties have been informed. For more details, please log in to your account.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const projectCompletionEmail = (data) => {
    return {
      html: 
        `
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
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                        <p
                                                                            style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                            <span
                                                                                style="font-size: 24px; line-height: 36px;"><span
                                                                                    style="color:#002366; line-height: 21px;"><strong><span
                                                                                            style="line-height: 21px;">Hi,
                                                                                        </span></strong></span><strong><span
                                                                                        style="line-height: 21px;"><span
                                                                                            style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p style="font-size: 18px; line-height: 150%;"></p>
                                                                        We are delighted to inform you that the
                                                                        <span><strong>${data.project_name}</strong></span>
                                                                        project has been successfully completed.
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p style="font-size: 18px; line-height: 150%;">
                                                                            This achievement marks a significant milestone, and
                                                                            we are excited for this journey. Detailed reports
                                                                            and outcomes of the project are available in your
                                                                            account for review.
                                                                        </p> <br>
                                                                        Thanks for choosing us,
                                                                        <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are delighted to inform you that the ${data.project_name} project has successfully completed.\n
        
        This achievement marks a significant milestone, and we are excited for this journey. Detailed\n
        reports and outcomes of the project are available in your account for review.\n

        Thanks for choosing us\n
        Akilaah Team
        `
    };
};

export const projectClosureEmail = (data) => {
    return {
      html: 
        `
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
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 14px; line-height: 150%; text-align: left; word-wrap: break-word;">
                                                                        <p
                                                                            style="font-size: 14px; line-height: 150%; text-align: left;">
                                                                            <span
                                                                                style="font-size: 24px; line-height: 36px;"><span
                                                                                    style="color:#002366; line-height: 21px;"><strong><span
                                                                                            style="line-height: 21px;">Hi,
                                                                                        </span></strong></span><strong><span
                                                                                        style="line-height: 21px;"><span
                                                                                            style="color: #CB6015; line-height: 21px;">${data.sponsor_name}</span></span></strong></span>

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
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p style="font-size: 18px; line-height: 150%;"></p>
                                                                        We are writing to inform you that the
                                                                        <span><strong>${data.project_name}</strong></span>
                                                                        project has been officially closed as of
                                                                        <span><strong>${data.closure_date}</strong></span>.
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <table style="font-family:arial,helvetica,sans-serif;" role="presentation"
                                                        cellpadding="0" cellspacing="0" width="100%" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 25px 5px;font-family:arial,helvetica,sans-serif;"
                                                                    align="left">

                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p style="font-size: 18px; line-height: 150%;">
                                                                            This marks the end of your project timeline, and we
                                                                            appreciate your support and involvement throughout
                                                                            the process. Detailed reports and final
                                                                            documentation are available in your account for
                                                                            review.
                                                                        </p> <br>
                                                                        Thanks for choosing us,
                                                                        <p>Akilaah Team</p>
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
        text: `Dear ${data.sponsor_name}\n
        We are writing to inform you that the ${data.project_name}project has been\n 
        officially closed as of ${data.closure_date}.\n
        
        This marks the end of your project timeline, and we appreciate your\n 
        support and involvement throughout the process. Detailed reports and\n
        final documentation are available in your account for review.\n

        Thanks for choosing us\n
        Akilaah Team
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
                                                                                            style="line-height: 21px;">Dear
                                                                                        </span></strong></span><strong><span
                                                                                        style="line-height: 21px;"><span
                                                                                            style="color: #CB6015; line-height: 21px;"> Akilaah Team</span></span></strong></span>
  
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
                                                                        I am writing to confirm my decision to proceed with the sponsor subscription package. 
                                                                        I have reviewed the details and believe this package best suits my needs,
                                                                        </p>
  
                                                                    </div>
                                                                    <br>
                                                                    <div class="v-line-height"
                                                                        style="font-size: 18px; line-height: 150%; text-align: left; word-wrap: break-word;color:#002366;">
                                                                        <p
                                                                            style="font-size: 18px; line-height: 150%; text-align: justify;">
                                                                            My selection is as follows:
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
                                                                                    
                                                                                    <li>Onboarding Fee: ${data.onboardingFee}</li>
                                                                                    <li>Extra Member: ${data.supBeneficiaryFee} </li>
                                                                                    <li>Data collection: ${data.dataCollectionFee} </li>
                                                                                    <li>SMS: ${data.supSmsFee} </li>
                                                                                    <li>Personalization Fee: ${data.personalizationFee} </li>
                                                                                    <li>Total: NGN ${data.amountToPay} </li>
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
                                                                        ${data.note}
                                                                        </p>
                                                                        <p style="font-size: 18px; line-height: 150%;">
                                                                        Could you please provide me with the necessary payment details and instructions? 
                                                                        </p> <br>
                                                                        Thank you for your assistance. I look forward to your prompt response.
  
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
      text: `Dear Akilaah Team,\n\n

      I am writing to confirm my decision to proceed with the sponsor subscription package. \n
      I have reviewed the details and believe this package best suits my needs.\n
      
      My selection is as follows:\n
    \n
    Onboarding Fee: ${data.onboardingFee}\n
    Extra Member: ${data.supBeneficiaryFee} \n
    Data collection: ${data.dataCollectionFee} \n
    SMS: ${data.supSmsFee} \n
    Personalization Fee: ${data.personalizationFee} \n
    Total: NGN ${data.amountToPay} \n
    ${data.note} \n\n
    NB: You Company Unique code should be share to beneficiaries `
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
                                                                                          style="color: #CB6015; line-height: 21px;">${data.name}</span></span></strong></span>
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
                                                                                  ${data.code}</span></strong></p>
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
                                                                            <li>Sponsor Unique ID: ${
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
                                                                    Sponsor unique ID will be your reference for
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
        <p style="font-size: 14px; line-height: 150%; text-align: justify;"><span style="font-size: 14px; line-height: 21px; color: #444444;">Congratulations! You just created an admin account on AKILAAH. Below are your Sponsorship credentials.</p>
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
    }<br>SPONSOR UNIQUE CODE: ${
      data.company_code
    }<br>SPONSOR LOGIN URL: <a href="https://agent.akilaah.com/login">Agent Portal</a> </span></p>
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
                                                                                      style="color: #CB6015; line-height: 21px;">${data.name_of_cooperation?.toUpperCase()}</span></span></strong></span>
  
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
