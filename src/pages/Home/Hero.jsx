import React from "react";
import {
  chakra,
  Button,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
import "./index.css";

const Hero = () => {
  let navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-content">
          <chakra.p
            mb={2}
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            color="white.400"
            textTransform="uppercase"
          >
            Waifus For Programmers
          </chakra.p>
          <chakra.h1
            mb={3}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            color="white.600"
          >
            An App made for Programmer Weebs.
          </chakra.h1>
          <chakra.p mb={5} color="gray.200" fontSize={{ md: "lg" }}>
            A Simple Web Viewer for the Github Repository ~{" "}
            <chakra.a
              href="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books"
              textDecoration={"underline"}
              color="cyan.300"
            >
              Anime Girls Holding Programming Books
            </chakra.a>{" "}
            made by{" "}
            <chakra.a
              href="https://github.com/asrvd"
              textDecoration={"underline"}
              color="cyan.300"
            >
              @asrvd
            </chakra.a>
            .
          </chakra.p>
        </div>
        <div className="hero-btns">
          <Button
            as="a"
            w={{ base: "full", sm: "auto" }}
            variant="outline"
            colorScheme={"cyan"}
            size="lg"
            marginRight={{
              md: "10px",
              lg: "10px",
              xl: "10px",
              sm: "10px",
              base: "0px",
            }}
            mb={{ base: 2, sm: 0 }}
            cursor="pointer"
            onClick={() => {
              navigate("/app");
            }}
          >
            Continue to App
          </Button>
          <Button
            as="a"
            variant="outline"
            colorScheme={"cyan"}
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            onClick={() => {
              window.open(
                "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books",
                "_blank"
              );
            }}
          >
            Add your own Images
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
