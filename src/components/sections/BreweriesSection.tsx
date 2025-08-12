import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Award } from "lucide-react";

const breweries = [
  {
    name: "SAK PUB",
    established: "2021",
    location: "Phnom Penh",
    specialty: "Craft Beer & Bites",
    description: "SAK PUB Craft Beer & Bites opened its taproom and kitchen in October 2021, serving handcrafted in small batch craft beer from taps and giving people a place to savor delicious craft beers in an enjoyable and welcoming atmosphere.",
    color: "bg-beer-amber"
  },
  {
    name: "Project Brews",
    established: "2020",
    location: "Kampot",
    specialty: "Modern Hoppy Beers",
    description: "Projekt brews is a small microbrewery based in Kampot since 2020 making modern hoppy beers.",
    color: "bg-festival-gold"
  },
  {
    name: "Black Bamboo",
    established: "N/A",
    location: "Silk Island",
    specialty: "Island Craft Brewery",
    description: "Blackbamboo is the first island craft brewery in Cambodia. Located near the Capital City on Silk island, a great place to enjoy a few craft beers with a great river view.",
    color: "bg-beer-dark"
  },
  {
    name: "Botanico Brewing Company",
    established: "N/A",
    location: "Phnom Penh",
    specialty: "Local Ingredients",
    description: "Located in the heart of Phnom Penh, Botanico is one of the oldest craft breweries in the country, creating a big range of different beers, often using locally grown ingredients. The motto is: Real Cambodian Craft Beer!",
    color: "bg-green-600"
  },
  {
    name: "Riel Brewing and Distilling",
    established: "N/A",
    location: "Phnom Penh",
    specialty: "Cambodian Ingredients",
    description: "Riel Brewing is a pioneering craft brewery located right here in Phnom Penh, celebrated for helping to establish the local craft beer scene. They are known for their creative and high-quality beers that often incorporate unique Cambodian ingredients.",
    color: "bg-festival-bronze"
  },
  {
    name: "Fuzzy Logic",
    established: "2014",
    location: "Cambodia",
    specialty: "Thunderslap IPA",
    description: "Established in 2014, Fuzzy Logic Brewing Co. is one of the pioneers in introducing craft beer to Cambodia and South East Asia. Well known for its Thunderslap IPA and John Lemon Hard Lemonade, Fuzzy Logic has a range of excellent quality products in kegs, cans and bottles.",
    color: "bg-purple-600"
  },
  {
    name: "Chug Lab",
    established: "N/A",
    location: "Phnom Penh (BKK3)",
    specialty: "Heavy Metal Theme",
    description: "Chug Brew is a very small nano brewery located in Phnom Penh with the focus on high quality modern craft beers. We also have a heavy metal themed Tap House 'Chug Lab' in Bkk3.",
    color: "bg-red-600"
  },
  {
    name: "Brew Khnear",
    established: "N/A",
    location: "Cambodia",
    specialty: "Work/Life Balance",
    description: "At Brew Khnear, (loosely translated as 'Brew Together,') our focus is on getting that work/life balance right. With solid and creative beers made from the finest ingredients using traditional brewing techniques, we strive not to work too hard, but to make time for ourselves and those who are important to us.",
    color: "bg-blue-600"
  },
  {
    name: "Funghi Art",
    established: "N/A",
    location: "Cambodia",
    specialty: "Rice-based Products",
    description: "Create new value for Cambodian rice through fermentation technology. We produce 3 kinds of beer, craft sake, sweet potato and rice Shochu and Gin. All made from Cambodian Rice.",
    color: "bg-orange-600"
  },
  {
    name: "Jaya-Vara Meadery",
    established: "3 years ago",
    location: "Cambodia",
    specialty: "Meads & Beers",
    description: "Jaya-Vara Meadery has been crafting unique meads and beers in Cambodia for the past 3 years. Started as a passion for traditional honey wine has evolved into a full-fledged brewery experimenting with bold flavors and local ingredients.",
    color: "bg-yellow-600"
  },
  {
    name: "Krama Craft Brewery",
    established: "N/A",
    location: "Siem Reap",
    specialty: "Franco-Cambodian",
    description: "Krama Craft Brewery is a cozy craft brewery located in Siem Reap, founded by two partners — one French, one Cambodian. Just minutes from the city center, it offers creative, locally inspired beers like the Triple Khmer and Black IPA. With a warm atmosphere, Cambodian ingredients, and genuine hospitality.",
    color: "bg-indigo-600"
  }
];

export function BreweriesSection() {
  return (
    <section className="py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-festival-crown mb-4">
            Participating Breweries
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet the 11 talented breweries competing for the crown
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-festival-gold">11</div>
              <div className="text-sm text-muted-foreground">Breweries</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-festival-gold">11</div>
              <div className="text-sm text-muted-foreground">Unique Beers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-festival-gold">7</div>
              <div className="text-sm text-muted-foreground">Beer Styles</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-festival-gold">100%</div>
              <div className="text-sm text-muted-foreground">Cambodian Made</div>
            </CardContent>
          </Card>
        </div>

        {/* Breweries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breweries.map((brewery, index) => (
            <Card key={index} className="h-full bg-gradient-card border-festival-gold/20 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={`${brewery.color} text-white`}>
                    #{index + 1}
                  </Badge>
                  {brewery.established !== "N/A" && (
                    <Badge variant="outline" className="text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {brewery.established}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-festival-crown">
                  {brewery.name}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {brewery.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-festival-gold" />
                    <span className="text-sm font-medium">{brewery.specialty}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {brewery.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Card className="bg-gradient-crown text-primary-foreground">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Support Local Craft Beer</h3>
              <p className="mb-4">
                These breweries represent the heart of Cambodia's growing craft beer scene. 
                Visit them after the competition to support local craftsmanship!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}