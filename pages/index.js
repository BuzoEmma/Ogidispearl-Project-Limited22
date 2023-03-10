import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import TopNav from "../Components/TopNav";
import NavBar from "../Components/NavBar";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineLine, AiOutlineClose } from "react-icons/ai";
import { Button, Flex, Text, Icon, IconButton, Center } from "@chakra-ui/react";
import { useState } from "react";
import PartnersImage from "../Components/PartnersImage";
import dynamic from "next/dynamic";
import Footer from "../Components/Footer";

const Swipper = dynamic(
  () => {
    return import("../Components/Swipper");
  },
  { ssr: false }
);

const ServicesSlider = dynamic(
  () => {
    return import("../Components/ServicesSlider");
  },
  { ssr: false }
);

const WorkSlider = dynamic(
  () => {
    return import("../Components/WorkSlider");
  },
  { ssr: false }
);

const ClientSlider = dynamic(
  () => {
    return import("../Components/ClientSlider");
  },
  { ssr: false }
);

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Head>
        <title>ogidispearl-project-Limited</title>
        <meta
          name="description"
          content="OgidisPearl Limiteed is a leading construction company in Nigeria Specialising in Oil and Gas sectors and Government functionaries our core competencies include a vast range of engineering and construction capabilities that cater to the diverse needs of its projects and clients in Nigeria. "
        />
        <link rel="icon" href="/asset/ogidilogo.svg" />
      </Head>
      <TopNav />
      <NavBar />

      {/* First  Head Section   */}
      <Flex
        w={"100%"}
        fontFamily="Satoshi"
        h={["410px", "450px", "530px", "580px", "600"]}
        bgRepeat="no-repeat"
        bgPos={"center"}
        bgSize={"cover"}
        bgColor={toggle ? "#1c24a0a4" : "#111376"}
        color={"white"}
        bgImage="url('/asset/ogidiback.png')"
        px={["15px", "2rem", "2rem", "2rem", "5rem"]}
        flexDir="column"
      >
        {/* Moblie Menu */}
        <Flex
          alignItems="center"
          w={"100%"}
          display={["flex", "flex", "flex", "none", "none"]}
        >
          <Flex w={"100%"} justifyContent="space-between" mt={"5"}>
            <Text></Text>
            <Text
              justifySelf="center"
              fontSize={["14px", "22px", "35px", 0, 0]}
              fontFamily="Satoshi"
            >
              OgidisPearl Project Limited
            </Text>
            <IconButton
              color={"white"}
              fontSize={["3xl", "3xl", "3.5rem", "none", "none"]}
              variant={"none"}
              position="relative"
              top={"-3px"}
              bottom={0}
              right={"-10px"}
              zIndex="10"
              icon={toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
              onClick={show}
            />
          </Flex>

          {/* Mobile Toggle Menu */}

          {toggle ? (
            <Flex
              w={"60%"}
              h={"100vh"}
              position="absolute"
              right={[0, 0, 0, 0, 0]}
              top={["2.9rem", "1.9rem", "3.5rem", "0rem", "0rem"]}
              py={2}
              flexDir="row"
              color={"#ffff"}
              bgColor={"#1d1f77"}
              // fontSize={"18px"}
              zIndex="10"
              fontWeight={"semibold"}
            >
              <IconButton
                color={"white"}
                fontSize={["3xl"]}
                variant={"none"}
                position="relative"
                top={"-1rem"}
                bottom={0}
                right={10}
                zIndex="10"
                icon={
                  toggle ? (
                    <AiOutlineClose className={styles.icon} />
                  ) : (
                    <AiOutlineMenu />
                  )
                }
                onClick={show}
              />
              <Flex
                gap={10}
                mt="4"
                pr={["0", "4rem", "0", "0", "0"]}
                flexDir="column"
                textAlign={"center"}
                alignContent="center"
                fontSize={["20px", "22px", "32px", 0, 0]}
                w={["100", "60%", "60%", "0", "0"]}
              >
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
              </Flex>
            </Flex>
          ) : (
            ""
          )}
        </Flex>

        {/* Landing Page Of Home Section */}
        <Flex flexDir="column">
          <Text
            fontSize={["24px", "32px", "40px", "60px", "80px"]}
            w={["143px", "200px", "350px", "500px", "700px"]}
            fontWeight={"semibold"}
            pt={"2rem"}
            pb={"1rem"}
            fontFamily="Satoshi"
          >
            Construction
          </Text>
          <Text
            fontFamily={"Satoshi"}
            w={["300px", "400px", "700px"]}
            h={["50px", "40px", "80px", "100px", "120px"]}
            fontSize={["16px", "18px", "25px", "28px", "32px"]}
          >
            Excellence in service delivery and commitment to customer
            satisfaction is our identity.
          </Text>
          <Button
            href="/about"
            bgColor={"white"}
            mt={["4rem", 12, "2.5rem", 12, 12]}
            fontSize={["12", "14", "16", "18", "20"]}
            w={["116px", "120px", "140px", "160px", "200px"]}
            h={["41px", "45px", "50px", "56px", "56px"]}
            color={"#111376"}
          >
            <Link href={"/services"}> Learn more</Link>
          </Button>
        </Flex>

        {/* Swipper Submenu */}
        <Swipper />
        {/* Border line */}
        <Flex
          w={"100%"}
          top={"-52px"}
          pos={"relative"}
          borderTop={"2px"}
          color={"white"}
        ></Flex>
      </Flex>

      {/* Second  Body Section  */}
      <Center>
        <Flex
          mt={"3rem"}
          px={["15px", "2rem", "2rem", "2rem", "5rem"]}
          color="#3B3C7D"
          gap={["0rem", "1rem", "0rem", "0rem", "6rem"]}
          w="100%"
          h={"600px"}
          flexDir={["column", "column", "row", "row", "row"]}
        >
          <Flex
            flexDir={"column"}
            gap="0.7rem"
            alignItems={["center", "center", "start", "start", "start"]}
            w={["100%", "100%", "50%", "80%", "80%"]}
          >
            <Text
              fontSize={["20px", "26px", "30px"]}
              fontWeight={"semibold"}
              w={["355px", "465px", "395px", "500px", "500px"]}
              textAlign={["center", "center", "start", "start", "start"]}
              fontFamily="Satoshi"
            >
              Excellence in service delivery and commitment to customer
              satisfaction is our identity
            </Text>
            <Text
              py={3}
              w={["360px", "470px", "390px", "500px", "500px"]}
              textAlign={["center", "center", "start", "start", "start"]}
              fontSize={"16px"}
              fontFamily="Satoshi"
            >
              OgidisPearl Limiteed is a leading construction company in Nigeria
              Specialising in Oil and Gas sectors and Government functionaries
              our core competencies include a vast range of engineering and
              construction capabilities that cater to the diverse needs of its
              projects and clients in Nigeria. We deliver world-class services
              to some of the largest and most respectect companies in the Oil &
              Gas industries striving at all times to add value to the
              activities of our customers and partners .
            </Text>

            <Button
              bgColor={"white"}
              borderColor={"#3B3C7D"}
              border={"1px"}
              my={[3, 5, "3px", 0, 7]}
              fontSize={["12", "14", "16", "18", "20"]}
              w={["116px", "120px", "140px", "160px", "200px"]}
              h={["41px", "45px", "50px", "56px", "56px"]}
              color={"#111376"}
            >
              <Link href={"/about"}>See more</Link>
            </Button>
          </Flex>

          <Flex
            w={["100%", "100%", "50%", "50%", "50%"]}
            flexDir={["row", "row", "column", "column", "column"]}
            pl={["10px", "10px", "2rem", "0", "0"]}
            py={["2rem", "1rem", "0", "0", "0"]}
            justifyContent={[
              "space-between",
              "space-betwwen",
              "start",
              "start",
              "start",
            ]}
            fontFamily="Satoshi"
            gap={["0rem", "0rem", "3rem", "2rem", "3rem"]}
          >
            <Flex flexDir={"row"} fontFamily="Satoshi">
              <Icon
                as={AiOutlineLine}
                display={["none", "none", "flex", "flex", "flex"]}
                fontSize={["8xl", "6xl", "5rem", "8xl", "8xl"]}
                className={styles.rotate}
              />
              <Flex
                flexDir={"column"}
                pt={1}
                fontSize={["12px", "14px", "23px", "28px", "28px"]}
              >
                <Text fontWeight={"semibold"}>5</Text>
                <Text
                  whiteSpace={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                  fontFamily="Satoshi"
                >
                  On-going Project
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir={"row"}>
              <Icon
                as={AiOutlineLine}
                fontSize={["6xl", "6xl", "5rem", "8xl", "8xl"]}
                className={styles.rotate}
              />
              <Flex
                flexDir={"column"}
                pt={1}
                fontSize={["12px", "14px", "23px", "28px", "28px"]}
              >
                <Text fontWeight={"semibold"}>22</Text>
                <Text
                  whiteSpace={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                >
                  Completed Project
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir={"row"}>
              <Icon
                as={AiOutlineLine}
                fontSize={["6xl", "6xl", "5rem", "8xl", "8xl"]}
                className={styles.rotate}
              />
              <Flex
                flexDir={"column"}
                pt={1}
                fontSize={["12px", "14px", "23px", "28px", "28px"]}
              >
                <Text fontWeight={"semibold"}> Road </Text>
                <Text
                  fontFamily="Satoshi"
                  flexWrap={"wrap"}
                  whiteSpace={["wrap"]}
                >
                  Construction Project at Kokori, ethiopa east local government
                  area
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>

      {/* Third  Body Section / Services  */}
      <ServicesSlider />

      {/* Fourth  Body Section / Workers  */}
      <WorkSlider />

      {/* Fourth  Body Section / Client  */}
      <ClientSlider />

      {/* Fiveth  Body Section / Partner  */}
      <PartnersImage />

      {/* Fiveth  Body Section / Partner  */}
      <Footer />
    </>
  );
}
