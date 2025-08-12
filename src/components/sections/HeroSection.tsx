import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, MapPin, Calendar, Clock } from "lucide-react";
import logoImage from "@/assets/beer-crown-logo.jpg";

interface HeroSectionProps {
  onJudgeClick: () => void;
}

export function HeroSection({ onJudgeClick }: HeroSectionProps) {
  return (
    <section className="py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img
              src={logoImage}
              alt="Beer Crown Logo"
              className="w-32 h-32 rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 bg-clip-text text-transparent mb-4">
            Cambodian Craft Beer Crown 2025
          </h1>
          <p className="text-xl text-amber-400 mb-6">
            Join us in judging Cambodia's finest craft beers
          </p>

          {/* CTA Button */}
<<<<<<< HEAD
=======
          {/*  */}
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-amber-50 border border-amber-400">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2 text-amber-700">Date</h3>
              <p className="text-amber-700">16th August 2025</p>
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card className="bg-amber-50 border border-amber-400">
=======
          <Card className="bg-gradient-card border-festival-gold/20">
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2 text-amber-700">Time</h3>
              <p className="text-amber-700">2:00pm - 11:30pm</p>
            </CardContent>
          </Card>

<<<<<<< HEAD
          <Card className="bg-amber-50 border border-amber-400">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600" />
              <h3 className="font-semibold mb-2 text-amber-700">Location</h3>
              <p className="text-amber-700">
=======
          <Card className="bg-gradient-card border-festival-gold/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-festival-gold" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
                Botanico Craft Beer Garden
                <br />
                Street 29
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Menu */}
        <Card className="bg-amber-200 text-amber-900">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-center mb-4">
              Quick Access
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                variant="outline"
                size="sm"
<<<<<<< HEAD
                className="bg-amber-200 border-amber-400 text-amber-800 hover:bg-amber-300"
=======
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
              >
                11 Beers to Judge
              </Button>
              <Button
                variant="outline"
                size="sm"
<<<<<<< HEAD
                className="bg-amber-200 border-amber-400 text-amber-800 hover:bg-amber-300"
=======
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
              >
                11 Breweries
              </Button>
              <Button
                variant="outline"
                size="sm"
<<<<<<< HEAD
                className="bg-amber-200 border-amber-400 text-amber-800 hover:bg-amber-300"
=======
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
              >
                3 Award Types
              </Button>
              <Button
                variant="outline"
                size="sm"
<<<<<<< HEAD
                className="bg-amber-200 border-amber-400 text-amber-800 hover:bg-amber-300"
=======
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
              >
                Live Timeline
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Organizer Info */}
        <div className="text-center mt-8">
<<<<<<< HEAD
          <p className="text-amber-700">
            Organized by{" "}
            <span className="font-semibold text-amber-600">
=======
          <p className="text-muted-foreground">
            Organized by{" "}
            <span className="font-semibold text-festival-crown">
>>>>>>> cd08744c84757920cf8af2b104ecb0ffa605c816
              CBAC - Cambodian Craft Beer Association
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
