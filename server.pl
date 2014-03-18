#!/usr/bin/env perl

# Automatically enables "strict", "warnings", "utf8" and Perl 5.10 features
use Mojolicious::Lite;

plugin 'tt_renderer' => {

    template_options => {

        INCLUDE_PATH => "templates/",
    }
};

# Route with placeholder
get '/' => sub {
  
    my $self = shift;
  

    $self->render('index');
};

# Start the Mojolicious command system
app->start;

