"use client";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();

  return (
    <Button
      color="red"
      onClick={async () => {
        await axios.delete("/api/issues/" + issueId);
        router.push("/issues");
      }}
    >
      Delete Issue
    </Button>
  );
};

export default DeleteButton;
