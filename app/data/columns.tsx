"use client";

import { ColumnConfig } from "react-shadcn-datagrid";
import { User } from "./types";

import { format, isValid } from "date-fns"; // Import format for cell display

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const departmentOptions = [
  {
    label: "Frontend",
    value: "Frontend",
  },
  {
    label: "Backend",
    value: "Backend",
  },
  {
    label: "Full Stack",
    value: "Full Stack",
  },
  {
    label: "DevOps",
    value: "DevOps",
  },
  {
    label: "AI",
    value: "AI",
  },
  {
    label: "Design",
    value: "Design",
  },
  {
    label: "Infrastructure",
    value: "Infrastructure",
  },
  {
    label: "Security",
    value: "Security",
  },
  {
    label: "Support",
    value: "Support",
  },
];

const skillOptions = [
  {
    label: "React",
    value: "react",
  },
  {
    label: "Node.js",
    value: "nodejs",
  },
  {
    label: "TypeScript",
    value: "typescript",
  },
  {
    label: "Next.js",
    value: "nextjs",
  },
  {
    label: "Docker",
    value: "docker",
  },
  {
    label: "Kubernetes",
    value: "kubernetes",
  },
  {
    label: "Ethical Hacking",
    value: "ethicalhacking",
  },
  {
    label: "Cybersecurity",
    value: "cybersecurity",
  },
  {
    label: "Cloud Computing",
    value: "cloudcomputing",
  },
  {
    label: "CI/CD",
    value: "cicd",
  },
];

export const columns: ColumnConfig<User>[] = [
  {
    header: "User",
    id: "user",
    cell: (row) => (
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="text-sm font-medium">{row.name}</p>
          <p className="text-xs text-muted-foreground">{row.email}</p>
        </div>
      </div>
    ),
    label: "User",
    type: "custom",
    isResizable: true,
    isDraggable: true,
    minWidth: 400,
    maxWidth: 800,
  },
  {
    header: "Phone",
    id: "phone",
    cell: (row) => <div>{row.phone}</div>,
    label: "Phone",
    type: "text",
    isResizable: true,
    isDraggable: true,
    minWidth: 300,
    maxWidth: 400,
  },
  {
    id: "age",
    header: "Age",
    label: "Age",
    type: "number",
    isEditable: true,
    isSortable: true,
    isResizable: true,
    minWidth: 200,
    maxWidth: 300,
    cell: (row) => (row.age !== null ? row.age : "N/A"),
    isDeletable: true,
  },
  {
    id: "joiningDate",
    header: "Joining Date",
    label: "Joining Date",
    type: "date",
    isEditable: true,
    isSortable: true,
    isDraggable: true,
    cell: (row) =>
      row.joiningDate && isValid(row.joiningDate)
        ? format(row.joiningDate, "yyyy-MM-dd")
        : "N/A",
    minWidth: 250,
    maxWidth: 400,
    isDeletable: true,
  },
  {
    id: "department",
    header: "Department",
    label: "Department",
    type: "select",
    selectOptions: departmentOptions.map((option) => ({
      label: option.label,
      value: option.value,
    })),
    isEditable: true,
    isSortable: true,
    isDraggable: true,
    cell: (row) => row.department || "N/A",
    minWidth: 250,
    maxWidth: 400,
    isDeletable: true,
  },
  {
    id: "skills",
    header: "Skills",
    label: "Skills",
    type: "multi-select",
    multiSelectOptions: skillOptions.map((option) => ({
      label: option.label,
      value: option.value,
    })),
    isEditable: true,
    isSortable: true,
    isDraggable: true,
    isResizable: true,
    minWidth: 300,
    maxWidth: 600,
    cell: (row) => row.skills?.join(", ") || "N/A",
    isDeletable: true,
  },

  {
    id: "satisfaction",
    header: "Satisfaction",
    type: "rating",
    label: "Satisfaction",
    isEditable: true,
    isSortable: true,
    isDraggable: true,
    isResizable: false,
    cell: (row) =>
      row.previousExperience ? `${row.previousExperience} years` : "N/A",
    minWidth: 300,
    maxWidth: 400,
    isDeletable: true,
  },

  {
    id: "agreedToTerms",
    header: "Agreed to Terms",
    label: "Agreed to Terms",
    type: "checkbox",
    isEditable: true,
    isSortable: true,
    isDraggable: true,
    cell: (row) => (row.agreedToTerms ? "Yes" : "No"),
    minWidth: 300,
    maxWidth: 400,
    isDeletable: true,
  },
  {
    id: "canWorkOnWeekends",
    header: "Weekend Availability",
    label: "Weekend Availability",
    type: "toggle",
    isEditable: true,
    isSortable: true,
    isDraggable: true,
    cell: (row) => (row.canWorkOnWeekends ? "Yes" : "No"),
    minWidth: 300,
    maxWidth: 400,
    isDeletable: true,
  },
];
