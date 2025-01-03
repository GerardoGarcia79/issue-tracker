import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

export const revalidate = 0;

export default async function Home() {
  const totals = {
    open: 0,
    inProgress: 0,
    closed: 0,
  };

  try {
    totals.open = await prisma.issue.count({ where: { status: "OPEN" } });
    totals.inProgress = await prisma.issue.count({
      where: { status: "IN_PROGRESS" },
    });
    totals.closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  } catch (error) {
    console.error("Error fetching issue counts:", error);
  }

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary totals={totals} />
        <IssueChart totals={totals} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};
