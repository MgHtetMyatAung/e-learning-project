import {
  Contact,
  FormContainer,
  InfoContainer,
} from "../../components/contact";
import { Hero } from "../../components/courses";
import { Container } from "../../components/layouts";

export default function ContactUs() {
  const title = "Contact Us";
  const content =
    "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.";
  return (
    <Container>
      <Hero title={title} content={content} />

      <Contact>
        <FormContainer />
        <InfoContainer />
      </Contact>
    </Container>
  );
}
