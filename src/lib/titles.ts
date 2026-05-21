export function getPlayerTitle(points: number) {
  if (points >= 300) {
    return {
      title: "Combat Grandmaster",
      icon: "/images/titles/grandmaster.png",
    };
  }

  if (points >= 150) {
    return {
      title: "Combat Master",
      icon: "/images/titles/master.png",
    };
  }

  if (points >= 75) {
    return {
      title: "Combat Ace",
      icon: "/images/titles/ace.png",
    };
  }

  if (points >= 25) {
    return {
      title: "Combat Specialist",
      icon: "/images/titles/specialist.png",
    };
  }

  if (points >= 10) {
    return {
      title: "Combat Cadet",
      icon: "/images/titles/cadet.png",
    };
  }

  return {
    title: "Rookie",
    icon: "/images/titles/rookie.png",
  };
}