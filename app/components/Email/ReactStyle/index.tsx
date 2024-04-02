import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ReactEmailStyleProps = {
  message: string;
  senderEmail: string;
  subjectData: string;
};

export default function ReactEmailStyle({
  message,
  senderEmail,
  subjectData,
}: ReactEmailStyleProps) {
  return (
    <Html>
      <Head />
      <Preview>{subjectData}</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                You recieved the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The senders email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
