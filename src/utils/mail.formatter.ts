export const formattMailInfo = async (data: any, customConfig: any) => {
    let message;
  
    if (data.type === 'template') {
      message = {
        to: data.email,
        from: {
          email: customConfig.sendgridMailSender,
          name: 'MAJFINTECH'
        },
        subject: data.subject,
        dynamic_template_data: data.dtd,
        template_id: data.templateId
      };
    } else {
      message = {
        to: data.email,
        from: {
          name: 'MAJFINTECH',
          email: customConfig.sendgridMailSender
        },
        subject: data.subject,
        text: data.text,
        html: data.html
      };
    }
  
    return message;
  };
  