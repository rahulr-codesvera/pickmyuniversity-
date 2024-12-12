import * as React from "react";
import { Html, Button, Text } from "@react-email/components";

export function Email({
  fullName,
  phoneNumber,
  email,
  budget,
  country,
  message,
  url,
}) {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
      <Text></Text>
    </Html>
  );
}

export default Email;
