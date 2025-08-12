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
            <img src={logoImage} alt="Beer Crown Logo" className="w-32 h-32 rounded-full shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            Cambodian Craft Beer Crown 2025
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Join us in judging Cambodia's finest craft beers
          </p>
          
          {/* CTA Button */}
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onJudgeClick}
            className="text-xl py-6 px-8 animate-bounce-slow"
          >
            <Crown className="h-6 w-6 mr-2" />
            Start Judging Beers
          </Button>
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-gradient-card border-festival-gold/20">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-festival-gold" />
              <h3 className="font-semibold mb-2">Date</h3>
              <p className="text-muted-foreground">16th August 2025</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-festival-gold/20">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-festival-gold" />
              <h3 className="font-semibold mb-2">Time</h3>
              <p className="text-muted-foreground">2:00pm - 11:30pm</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card border-festival-gold/20">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-festival-gold" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Botanico Craft Beer Garden<br />Street 29</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access Menu */}
        <Card className="bg-gradient-crown text-primary-foreground">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-center mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                11 Beers to Judge
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                11 Breweries
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                3 Award Types
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Live Timeline
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Organizer Info */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Organized by <span className="font-semibold text-festival-crown">CBAC - Cambodian Craft Beer Association</span>
          </p>
        </div>
      </div>
    </section>
  );
}