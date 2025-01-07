export const emailTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Template</title>
</head>
<body style="background-color: #f7f7f7; padding: 20px; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <div style="background: linear-gradient(145deg, rgba(255, 195, 112, 1) 0%, rgba(238, 154, 36, 1) 100%); border-radius: 10px 10px 0 0; padding: 20px; text-align: center; color: white; font-size: 24px;">
      <strong>New Inquiry Details</strong>
    </div>
    <div style="padding: 20px;">
      <p style="font-size: 16px; color: #333;">
        <strong>Name:</strong> <span style="color: #555;">{{fullName}}</span>
      </p>
      <p style="font-size: 16px; color: #333;">
        <strong>Phone Number:</strong> <span style="color: #555;">{{phoneNumber}}</span>
      </p>
      <p style="font-size: 16px; color: #333;">
        <strong>Email:</strong> <span style="color: #555;">{{email}}</span>
      </p>
      <p style="font-size: 16px; color: #333;">
        <strong>Budget:</strong> <span style="color: #555;">{{budget}}</span>
      </p>
      <p style="font-size: 16px; color: #333;">
        <strong>Country:</strong> <span style="color: #555;">{{country}}</span>
      </p>
      <p style="font-size: 16px; color: #333;">
        <strong>Message:</strong>
        <div style="border-left: 4px solid #ee9b24; padding-left: 10px; color: #555; font-style: italic;">
          {{message}}
        </div>
      </p>
    </div>
    <div style="text-align: center; font-size: 14px; color: #aaa; margin-top: 20px; padding: 10px 0;">
      <p>&copy; {{currentYear}} Pick My University. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
