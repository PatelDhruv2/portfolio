"use client";

import { useState } from "react";

const reactions = [
  { id: "spark", label: "Spark", glyph: "SP", tone: "tone-teal" },
  { id: "love", label: "Love", glyph: "LV", tone: "tone-rose" },
  { id: "shortlist", label: "Shortlist", glyph: "SL", tone: "tone-gold" },
] as const;

type ReactionId = (typeof reactions)[number]["id"];

const initialCounts: Record<ReactionId, number> = {
  spark: 28,
  love: 19,
  shortlist: 12,
};

export function ReactionDock() {
  const [counts, setCounts] = useState(initialCounts);
  const [activeReaction, setActiveReaction] = useState<ReactionId>("spark");
  const totalReactions = counts.spark + counts.love + counts.shortlist;

  return (
    <section className="reaction-dock" aria-label="Portfolio reactions">
      <div className="reaction-dock__header">
        <div>
          <p className="panel-label">React</p>
          <p className="reaction-dock__title">Give the profile a quick signal</p>
        </div>
        <span className="reaction-dock__total">{totalReactions} reactions</span>
      </div>

      <div className="reaction-list" role="group" aria-label="Reactions">
        {reactions.map((reaction) => {
          const isActive = activeReaction === reaction.id;
          return (
            <button
              key={reaction.id}
              type="button"
              className={`reaction-chip ${reaction.tone} ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setCounts((current) => ({
                  ...current,
                  [reaction.id]: current[reaction.id] + 1,
                }));
                setActiveReaction(reaction.id);
              }}
              aria-pressed={isActive}
            >
              <span className="reaction-chip__glyph">{reaction.glyph}</span>
              <span className="reaction-chip__label">{reaction.label}</span>
              <span className="reaction-chip__count">{counts[reaction.id]}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
