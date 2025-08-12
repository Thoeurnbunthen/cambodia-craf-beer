import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Mic, Music, Trophy, Star, Users } from "lucide-react";

const timelineEvents = [
  {
    time: "2:00 PM",
    title: "Event Begins",
    description: "Doors open, registration and welcome drinks",
    icon: Users,
    type: "start",
    status: "upcoming"
  },
  {
    time: "3:15 PM",
    title: "MC Introduction",
    description: "Welcome and event overview by the Master of Ceremonies",
    icon: Mic,
    type: "announcement",
    status: "upcoming"
  },
  {
    time: "3:30 PM - 6:30 PM",
    title: "DJ Wha-Wah",
    description: "Background music and entertainment",
    icon: Music,
    type: "entertainment",
    status: "upcoming"
  },
  {
    time: "6:40 PM",
    title: "Blind Tasting Live Session",
    description: "Professional judges conduct live blind tasting",
    icon: Star,
    type: "judging",
    status: "upcoming"
  },
  {
    time: "7:30 PM",
    title: "Award Ceremony",
    description: "Announcement of winners and prize presentation",
    icon: Trophy,
    type: "awards",
    status: "upcoming"
  },
  {
    time: "8:30 PM - 11:00 PM",
    title: "Live Music",
    description: "The Broken Cymbal takes the stage",
    icon: Music,
    type: "entertainment",
    status: "upcoming"
  },
  {
    time: "11:30 PM",
    title: "Event Ends",
    description: "Thank you and safe travels home",
    icon: Clock,
    type: "end",
    status: "upcoming"
  }
];

const getEventColor = (type: string) => {
  switch (type) {
    case "start": return "bg-blue-500";
    case "announcement": return "bg-blue-500";
    case "entertainment": return "bg-blue-500";
    case "judging": return "bg-blue-500";
    case "awards": return "bg-blue-500";
    case "end": return "bg-blue-500";
    default: return "bg-blue-500";
  }
};

const getEventIcon = (IconComponent: any, type: string) => {
  return <IconComponent className={`h-6 w-6 text-white`} />;
};

export function TimelineSection() {
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <section className="py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-festival-crown mb-4">
            Event Timeline
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            August 16th, 2025 • Botanico Craft Beer Garden, Street 29
          </p>
          
          {/* Current Time Display */}
          <Card className="bg-gradient-hero text-primary-foreground inline-block">
          
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-festival-gold via-beer-amber to-festival-bronze"></div>
          
          {/* Timeline Events */}
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full ${getEventColor(event.type)} shadow-lg`}>
                  {getEventIcon(event.icon, event.type)}
                </div>
                
                {/* Event Card */}
                <div className="flex-1 min-w-0">
                  <Card className="bg-gradient-card border-festival-gold/20 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl text-festival-crown">
                          {event.title}
                        </CardTitle>
                        <Badge variant="outline" className="font-bold text-festival-crown border-festival-crown">
                          {event.time}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 space-y-4">
          <Card className="bg-white text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Star className="h-6 w-6 mr-2" />
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• People's Choice voting is open throughout the event until 7:00 PM</li>
                <li>• Please pace yourselves - there are 11 beers to judge!</li>
                <li>• Food will be available throughout the event</li>
                <li>• Live music begins after the award ceremony</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 mx-auto mb-3 text-festival-gold" />
                <h4 className="font-semibold mb-2">Judging Period</h4>
                <p className="text-sm text-muted-foreground">
                  Complete your beer ratings before 7:00 PM for the People's Choice Award
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Music className="h-8 w-8 mx-auto mb-3 text-festival-gold" />
                <h4 className="font-semibold mb-2">Entertainment</h4>
                <p className="text-sm text-muted-foreground">
                  Enjoy DJ sets and live music throughout the evening
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}