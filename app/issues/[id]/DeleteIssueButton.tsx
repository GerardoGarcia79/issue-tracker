import { Button } from "@radix-ui/themes";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
