function getAssignees(assignees) {
  const options = ["CamilaSarmiento1", "luisalejandrosalazar", "carin91", "Juanmediina", "valentinavargas31"];
  assignees.forEach((assignee) => {
    if (!options.includes(assignee)) {
      throw new Error(`Assignee "${assignee}" not found`);
    }
  });

  return assignees;
}

export { getAssignees };
