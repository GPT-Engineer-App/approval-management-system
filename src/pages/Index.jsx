import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, Heading, List, ListItem, ListIcon, useToast } from "@chakra-ui/react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

const Index = () => {
  const [proposals, setProposals] = useState([]);
  const [proposalText, setProposalText] = useState("");
  const [merchantName, setMerchantName] = useState("");
  const toast = useToast();

  const handleProposalSubmit = () => {
    if (!proposalText || !merchantName) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newProposal = {
      id: proposals.length + 1,
      text: proposalText,
      merchant: merchantName,
    };

    setProposals([...proposals, newProposal]);
    setProposalText("");
    setMerchantName("");
    toast({
      title: "Success",
      description: "Proposal submitted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        Merchant Proposal Submission
      </Heading>
      <FormControl>
        <FormLabel>Merchant Name</FormLabel>
        <Input value={merchantName} onChange={(e) => setMerchantName(e.target.value)} placeholder="Enter merchant name" />
      </FormControl>
      <FormControl>
        <FormLabel>Proposal</FormLabel>
        <Textarea value={proposalText} onChange={(e) => setProposalText(e.target.value)} placeholder="Describe your proposal" />
      </FormControl>
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleProposalSubmit}>
        Submit Proposal
      </Button>
      <Box w="full">
        <Heading as="h2" size="lg">
          Submitted Proposals
        </Heading>
        <List spacing={3}>
          {proposals.map((proposal) => (
            <ListItem key={proposal.id}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              {proposal.merchant}: {proposal.text}
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
