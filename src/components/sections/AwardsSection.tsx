import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Star, Medal, Crown, Award } from "lucide-react";

const awards = [
  {
    title: "Main Award",
    subtitle: "Gold, Silver & Bronze",
    description:
      "This award is judged by a group of six international experts, according to the BJCP score sheet in a blind tasting mode. Some of the judges are BJCP certified.",
    icon: Crown,
    color: "bg-gradient-crown",
    badges: [
      { label: "BJCP Standards", color: "bg-festival-gold" },
      { label: "Blind Tasting", color: "bg-festival-silver" },
      { label: "International Judges", color: "bg-festival-bronze" },
    ],
    prizes: ["Gold Medal", "Silver Medal", "Bronze Medal"],
    prestige: "highest",
  },
  {
    title: "People's Choice Award",
    subtitle: "Voted by Festival Guests",
    description:
      "This is the award judged by you – all our guests. To judge, please use the google form on this website and submit one judging per beer.",
    icon: Users,
    color: "bg-gradient-hero",
    badges: [
      { label: "Public Vote", color: "bg-blue-500" },
      { label: "All Guests", color: "bg-green-500" },
      { label: "Mobile Friendly", color: "bg-purple-500" },
    ],
    prizes: ["Winner's Trophy", "People's Favorite"],
    prestige: "popular",
  },
  {
    title: "Brewer's Choice Award",
    subtitle: "Peer Recognition",
    description:
      "All brewers participating, are also present at the event. The brewers judge each beer as well. This is the least prestigious award.",
    icon: Star,
    color: "bg-gradient-card",
    badges: [
      { label: "Peer Review", color: "bg-orange-500" },
      { label: "Industry Vote", color: "bg-teal-500" },
      { label: "Technical Merit", color: "bg-pink-500" },
    ],
    prizes: ["Brewer's Recognition"],
    prestige: "industry",
  },
];

const getPrestigeLevel = (prestige: string) => {
  switch (prestige) {
    case "highest":
      return { text: "Most Prestigious", color: "text-festival-crown" };
    case "popular":
      return { text: "Most Popular", color: "text-blue-600" };
    case "industry":
      return { text: "Industry Recognition", color: "text-orange-600" };
    default:
      return { text: "Award", color: "text-muted-foreground" };
  }
};

export function AwardsSection() {
  return (
    <section className="py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-festival-crown mb-4">
            Competition Awards
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Three distinct categories celebrating excellence in craft brewing
          </p>

          {/* Award Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <Card className="text-center">
              <CardContent className="p-4">
                <Trophy className="h-6 w-6 mx-auto mb-2 text-festival-gold" />
                <div className="text-lg font-bold">3</div>
                <div className="text-xs text-muted-foreground">Award Types</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Medal className="h-6 w-6 mx-auto mb-2 text-festival-gold" />
                <div className="text-lg font-bold">6</div>
                <div className="text-xs text-muted-foreground">
                  Total Prizes
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-4">
                <Users className="h-6 w-6 mx-auto mb-2 text-festival-gold" />
                <div className="text-lg font-bold">11</div>
                <div className="text-xs text-muted-foreground">
                  Competing Beers
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            const prestigeInfo = getPrestigeLevel(award.prestige);

            return (
              <Card
                key={index}
                className="h-full bg-gradient-card border-festival-gold/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${award.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-festival-crown mb-2">
                    {award.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {award.subtitle}
                  </p>
                  <Badge className={prestigeInfo.color} variant="outline">
                    {prestigeInfo.text}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>

                  {/* Features/Badges */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {award.badges.map((badge, badgeIndex) => (
                        <Badge
                          key={badgeIndex}
                          className={`${badge.color} text-white text-xs`}
                        >
                          {badge.label}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Prizes */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Prizes:</h4>
                    <div className="space-y-1">
                      {award.prizes.map((prize, prizeIndex) => (
                        <div
                          key={prizeIndex}
                          className="flex items-center text-sm"
                        >
                          <Award className="h-3 w-3 mr-2 text-festival-gold" />
                          {prize}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Judging Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="text-primary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                How to Participate in People's Choice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <p className="text-sm">Navigate to the "Judge Beers" section</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <p className="text-sm">
                  Rate each beer on appearance, aroma, flavor, mouthfeel, and
                  overall impression
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <p className="text-sm">Submit your ratings for all 11 beers</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <p className="text-sm">
                  Results announced at 7:30 PM during the award ceremony
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-festival-crown">
                <Trophy className="h-6 w-6 mr-2" />
                Award Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">People's Choice Voting</span>
                  <Badge variant="outline">Until 7:00 PM</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Expert Judging</span>
                  <Badge variant="outline">6:40 PM</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Award Ceremony</span>
                  <Badge variant="outline">7:30 PM</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-festival-gold/10 rounded-lg border border-festival-gold/20">
                  <span className="font-medium text-festival-crown">
                    Results Announced
                  </span>
                  <Badge className="bg-festival-gold text-primary-foreground">
                    7:30 PM
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Card className="bg-gradient-hero text-primary-foreground">
            <CardContent className="p-6">
              <Crown className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Be Part of the Crown</h3>
              <p className="mb-4">
                Your vote matters! Help us crown Cambodia's best craft beer by
                participating in the People's Choice Award.
              </p>
              <p className="text-sm opacity-90">
                Every vote counts towards recognizing the exceptional
                craftsmanship of our local brewers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
