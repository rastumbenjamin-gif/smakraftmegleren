import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoginModal } from "@/components/LoginModal";
import { SignUpModal } from "@/components/SignUpModal";
import { User, LogOut } from "lucide-react";

export const Header = () => {
  const { t } = useLanguage();
  const { user, profile, signOut, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Debug: Log auth state
  console.log('Header - Auth state:', { user: !!user, profile: !!profile, loading });

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-slate-900">Småkraft</span>
              <span className="text-emerald-600">megleren</span>
            </div>

            <nav className="flex items-center space-x-4">
              {user && profile ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="gap-2">
                      <User className="h-4 w-4" />
                      <span className="hidden md:inline">{profile.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">{profile.name}</p>
                        <p className="text-xs text-muted-foreground">{profile.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="gap-2 text-red-600">
                      <LogOut className="h-4 w-4" />
                      {t('auth.logout')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowLogin(true)}
                  >
                    {t('auth.login')}
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => setShowSignUp(true)}
                  >
                    {t('auth.signup')}
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      </header>

      <LoginModal
        open={showLogin}
        onOpenChange={setShowLogin}
        onSwitchToSignUp={() => {
          setShowLogin(false);
          setShowSignUp(true);
        }}
      />
      <SignUpModal
        open={showSignUp}
        onOpenChange={setShowSignUp}
        onSwitchToLogin={() => {
          setShowSignUp(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};