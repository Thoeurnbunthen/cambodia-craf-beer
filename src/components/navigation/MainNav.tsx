import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Crown, Clock, Trophy, Users } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MainNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function MainNav({ activeSection, onSectionChange }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Crown },
    { id: "judge", label: "Judge Beers", icon: Trophy, special: true },
    { id: "breweries", label: "Breweries", icon: Users },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "awards", label: "Awards", icon: Trophy },
  ];

  const handleNavClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Crown className="h-8 w-8 text-festival-gold" />
          <div>
            <h1 className="text-xl font-bold text-festival-crown">Beer Crown 2025</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Cambodian Craft Beer Association</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={item.special ? "judge" : activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className={item.special ? "animate-pulse-slow" : ""}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b">
                <div className="flex items-center space-x-3">
                  <Crown className="h-6 w-6 text-festival-gold" />
                  <div>
                    <h2 className="font-bold text-festival-crown">Beer Crown 2025</h2>
                    <p className="text-xs text-muted-foreground">CBAC</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4 space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={item.special ? "judge" : activeSection === item.id ? "default" : "ghost"}
                      className={`w-full justify-start ${item.special ? "animate-pulse-slow" : ""}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}