import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueForm from "./DynamicPage";

interface Props {
  params: Promise<{ id: string }>;
}

const EditIssuePage = async (props: Props) => {
  const params = await props.params;
  const resolvedParams = await Promise.resolve(params);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(resolvedParams.id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
