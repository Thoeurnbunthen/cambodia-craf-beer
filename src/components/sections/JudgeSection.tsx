import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowLeft, ArrowRight, CheckCircle, Trophy, Beer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const beers = [
  { id: 1, name: "Hazy IPA", brewery: "SAK PUB" },
  { id: 2, name: "Hazy IPA", brewery: "Project Brews" },
  { id: 3, name: "Speciality IPA", brewery: "Black Bamboo" },
  { id: 4, name: "Weizenbock", brewery: "Botanico Brewing" },
  { id: 5, name: "New England IPA", brewery: "Riel Brewing" },
  { id: 6, name: "American IPA", brewery: "Fuzzy Logic" },
  { id: 7, name: "Blonde Ale", brewery: "Chug Lab" },
  { id: 8, name: "American Pale Ale", brewery: "Brew Khnear" },
  { id: 9, name: "Brut IPA", brewery: "Funghi Art" },
  { id: 10, name: "American Stout", brewery: "Jaya-Vara Meadery" },
  { id: 11, name: "Specialty IPA", brewery: "Krama Craft Brewery" },
];

interface Rating {
  appearance: number[];
  aroma: number[];
  flavor: number[];
  mouthfeel: number[];
  overall: number[];
}

export function JudgeSection() {
  const [currentBeer, setCurrentBeer] = useState(0);
  const [ratings, setRatings] = useState<Record<number, Rating>>({});
  const [judgedBeers, setJudgedBeers] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  // Load saved ratings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('beerRatings');
    if (saved) {
      try {
        const parsedRatings = JSON.parse(saved);
        setRatings(parsedRatings);
        setJudgedBeers(new Set(Object.keys(parsedRatings).map(Number)));
      } catch (error) {
        console.error('Error loading saved ratings:', error);
      }
    }
  }, []);

  // Save ratings to localStorage
  const saveRatings = (newRatings: Record<number, Rating>) => {
    localStorage.setItem('beerRatings', JSON.stringify(newRatings));
  };

  const beer = beers[currentBeer];
  const currentRating = ratings[beer.id] || {
    appearance: [7],
    aroma: [7],
    flavor: [7],
    mouthfeel: [7],
    overall: [7],
  };

  const updateRating = (category: keyof Rating, value: number[]) => {
    const newRatings = {
      ...ratings,
      [beer.id]: {
        ...currentRating,
        [category]: value,
      },
    };
    setRatings(newRatings);
    saveRatings(newRatings);
  };

  const submitRating = () => {
    const newJudgedBeers = new Set(judgedBeers);
    newJudgedBeers.add(beer.id);
    setJudgedBeers(newJudgedBeers);
    
    toast({
      title: "Rating Submitted!",
      description: `Thank you for rating ${beer.name} from ${beer.brewery}`,
    });

    // Auto-advance to next beer if available
    if (currentBeer < beers.length - 1) {
      setCurrentBeer(currentBeer + 1);
    }
  };

  const getTotalScore = () => {
    const total = currentRating.appearance[0] + 
                 currentRating.aroma[0] + 
                 currentRating.flavor[0] + 
                 currentRating.mouthfeel[0] + 
                 currentRating.overall[0];
    return total;
  };

  const getScoreColor = (score: number) => {
    if (score >= 40) return "text-festival-gold";
    if (score >= 35) return "text-beer-amber";
    return "text-muted-foreground";
  };

  return (
    <section className="py-8 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-festival-crown mb-2">Beer Judging</h2>
          <p className="text-muted-foreground">Rate each beer on a scale of 1-10</p>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Beer {currentBeer + 1} of {beers.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {judgedBeers.size} completed
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentBeer + 1) / beers.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Beer Card */}
        <Card className="mb-6 bg-gradient-card border-festival-gold/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Beer className="h-12 w-12 text-beer-amber" />
            </div>
            <CardTitle className="text-2xl font-bold text-festival-crown">
              {beer.name}
            </CardTitle>
            <p className="text-lg text-muted-foreground">{beer.brewery}</p>
            {judgedBeers.has(beer.id) && (
              <Badge className="bg-festival-gold text-primary-foreground">
                <CheckCircle className="h-4 w-4 mr-1" />
                Rated
              </Badge>
            )}
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Rating Categories */}
            {Object.entries(currentRating).map(([category, value]) => (
              <div key={category} className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-medium capitalize">
                    {category}
                  </Label>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-festival-gold fill-current" />
                    <span className="font-bold text-lg">{value[0]}</span>
                  </div>
                </div>
                <Slider
                  value={value}
                  onValueChange={(newValue) => updateRating(category as keyof Rating, newValue)}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Poor (1)</span>
                  <span>Excellent (10)</span>
                </div>
              </div>
            ))}

            {/* Total Score */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Score:</span>
                <span className={`text-2xl font-bold ${getScoreColor(getTotalScore())}`}>
                  {getTotalScore()}/50
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              variant="judge" 
              size="lg" 
              className="w-full"
              onClick={submitRating}
            >
              <Trophy className="h-5 w-5 mr-2" />
              Submit Rating
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => setCurrentBeer(Math.max(0, currentBeer - 1))}
            disabled={currentBeer === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex space-x-2">
            {beers.map((_, index) => (
              <Button
                key={index}
                variant={index === currentBeer ? "default" : "outline"}
                size="icon"
                className={`w-8 h-8 ${judgedBeers.has(beers[index].id) ? 'bg-festival-gold' : ''}`}
                onClick={() => setCurrentBeer(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentBeer(Math.min(beers.length - 1, currentBeer + 1))}
            disabled={currentBeer === beers.length - 1}
          >
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Completion Status */}
        {judgedBeers.size === beers.length && (
          <Card className="mt-6 bg-gradient-crown text-primary-foreground">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
              <p>You've rated all {beers.length} beers. Thank you for your participation!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}