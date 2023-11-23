# MusicVis

## Introduction
When we talk about music, we're speaking of an art form that dances on the spectrum of sound, a realm where noise and melody coalesce and diverge in a complex ballet of frequencies. Our research delves into the intricate patterns that emerge when we dissect music to its core, discerning the fine line where music ceases to be noise and transforms into an organized symphony of sound that can convey a spectrum of emotions and instructions.

At the heart of our inquiry lies three pivotal tasks:
- the differentiation between music and noise
- the classification of music based on valence and arousal (the emotional content and energy it conveys)
- the instructional capacity of instrumental music.

These tasks help us to unravel the threads that compose the rich tapestry of music. Let us tune our instruments and prepare to delve into the symphony of sounds, to distinguish the noise from the music, and to discover the patterns that lie within.

## Music vs. Noise
### Overview
The quest to delineate music from noise is a fascinating study of sound and its perception. Our research endeavors to pinpoint the defining characteristics that separate the order and harmony of music from the perceived disorder of noise. This examination is rooted in the physics of sound waves and extends to the complex realms of auditory perception and cultural interpretation.

Music is traditionally understood as a deliberate arrangement of sounds, marked by rhythm, melody, and harmony, intentionally composed to convey emotion and aesthetic pleasure. Noise, conversely, is often characterized as sound without deliberate structure, sometimes erratic and undesired, generally lacking the intentionality and organization inherent in music.

Yet, the demarcation between music and noise is not absolute; it is influenced by individual and cultural subjectivities. The patter of rain may be intrusive to some, yet soothing to others. Our research focuses on the objective qualities of these auditory phenomena, exploring their acoustic properties in an effort to classify and understand them within a scientific and cultural framework.

Through this investigation, we aim to refine our understanding of sound patterns, enhancing our ability to discern the complex structure using various visualization techniques.

### Task 1
This visualization demonstrates the difference in the audio-temporal spectrum of noise vs. music.

The spectrogram is a visual representation of sound where time is displayed on the horizontal axis, and frequency (pitch) is on the vertical axis. The colors represent the intensity or loudness of the sound at each frequency and point in time; brighter colors mean more energy at that frequency at that moment. In this spectrogram, we observe shallow horizontal lines and patterns that indicate the presence of tones or notes, which are stable frequencies over time. We also see a higher intensity in the 100-1000 Hz range, which represents the more discernable tones or notes that are more sensible for human auditory perception. This structure is characteristic of music or voice, where specific notes are hit and held, creating a pattern that can be followed and anticipated. These patterns represent the order within sound, the underpinning of what we perceive as music or structured vocalization.
<br>
TODO: explain more when zoomed in

Contrast this with the noisy audio spectrogram. Here we see a very different story. Instead of lines and patterns, there is a more homogenous spread of color. This indicates that there is energy at many frequencies without the clear structure or repetition we see in the voice spectrogram. This is what we perceive as noisy sound with no discernible pattern or predictability. It's akin to a crowded room where multiple conversations meld into a constant hum, versus a soloist whose every note can be distinguished.

In the noisy spectrogram, note the sporadic red dots labeled as 'Noise.' These dots are likely instances of particularly loud, abrupt noises that stand out from the ambient sound. These are momentary disruptions that punctuate the noise.

From these visualizations, we can deduce several patterns that distinguish music from noise:

1. Structure: Music shows patterns, like the lines in the voice spectrogram, while noise does not.

2. Repetition: Music often has repeating elements, indicative of rhythm or melody, which are absent in noise.

3. Stability: The stable presence of certain frequencies in music contrasts with the erratic frequencies in noise.

4. Intensity Variations: In music, some frequencies will be more prominent (brighter colors), aligning with the musical composition's dynamics.

By observing these characteristics, we can easily identify structured music and the chaotic noise. This understanding not only enriches our auditory experiences but also has practical applications, like noise cancellation, audio filtering, and sound design, where separating music from noise is essential.

### Task 2
In this visualization, we are presented with two sets of images that compare 'Lower Level' and 'Higher Level' features of music and noise. These representations help us explore the complexity of sounds and how they can be analyzed and differentiated by levels of abstraction.

Lower Level Feature Comparison:
We use a trained neural network to convert lower level music features into mosaic images. The lower level features can be amplitude, frequency, or other acoustic properties of sound that are more specific and granular to a smaller portion of the audio spectrum. The mosaic images are created by taking the average of the lower level features over time, creating a visual representation of the sound's acoustic properties.

The mosaic representation of music has cooler colors with intermittent bursts of warmer hues. This suggests a level of consistency with occasional variations, akin to a musical composition with a steady rhythm and occasional accents or harmonies. In music, these features could represent the basic sound waves produced by an instrument or voice, showing variations in pitch and loudness but within a controlled and structured environment.

The noise representation, however, appears more erratic, with an almost equal distribution of colors without any discernible pattern or order. This is indicative of the randomness of noise, where there is no intentional structuring of sound waves. In a noisy environment, the sound waves from different sources collide and combine without any synchronization, leading to a chaotic mix that lacks the organization found in music.

Higher Level Feature Comparison:

The higher level features present a more abstract representation. These can be symbolic, such as score, piano roll, and onset time. They can also be non-symbolic like F0 trajectory, rhythm, and beats. The 'Music' image shows a series of parallel lines, suggesting a repetitive pattern. In the context of music, these could represent more complex aspects such as melody and rhythm that repeat over time, creating the harmony and structure that we associate with songs or compositions.

Conversely, the noise image, while also showing lines, presents them at angles, creating a less uniform appearance. This could be interpreted as the higher level abstraction of noise, where even if there are patterns, they do not align in a harmonious or predictable way. They could represent the variations in volume and frequency over time in a noisy environment, which may have some structure but not in the organized, rhythmic fashion of music.

From these visualizations, we can observe that:

    Music tends to have both low and high-level features that exhibit some form of repetition and structure, whether it be in the consistent use of certain tones or the rhythmic patterns that define a piece's tempo and melody.
    Noise, while it may have some patterns at a high level, does not show the same degree of organization or predictability. Its features are more dispersed and less structured, reflecting its chaotic nature.

In essence, this interactive design allows us to see beyond what we can hear, providing a visual map to the unseen architecture of sound. Through this lens, we gain a deeper understanding of the complex layers that differentiate the ordered beauty of music from the disordered tapestry of noise.

### Task 3
In this visualization, we delve into the realm of trigonometric mapping to distinguish between noise and music. By plotting the audio time series data on a three-dimensional graph, with time on the x-axis and the sound signal processed through trigonometric functions on the y and z axes, we can visualize the complexity and structure of sound in a form that reveals patterns not immediately apparent to the ear.

**Noise Visualization:**

The graph labeled 'Noise' presents a wild, almost erratic form, with spikes that jut out unpredictably in all directions. This visual chaos is emblematic of noise's nature: a jumble of frequencies and amplitudes without any regularity or rhythm. The spikes represent bursts of sound that do not correlate over time, illustrating the disordered essence of noise. There's no discernible pattern or repetition, mirroring the acoustic experience of noise—where the sound is random, and no specific frequency or rhythm dominates.

**Music Visualization:**

On the other side, the 'Music' graph shows a form that is also complex but less chaotic. Here, we can observe protrusions that seem to echo each other, suggesting a pattern or motif that repeats over time. These repeating structures reflect the rhythmic and melodic elements of music, where certain notes or sequences recur at regular intervals, creating the harmonious structure we associate with musical compositions. Despite the complexity, there is an underlying order evident in the repetition and symmetry of the protrusions, much like the repeating chorus or verse in a song.

**Patterns Differentiating Music from Noise:**

From these visualizations, one can discern:

1. **Repetition in Music**: In the music graph, the echoing shapes hint at the repetitive nature of music, where certain elements are revisited throughout a piece, providing a sense of order and predictability.

2. **Chaos in Noise**: The noise graph lacks such repetition, with its shapes not repeating or mirroring each other, highlighting the unpredictable nature of noise.

3. **Complexity and Structure**: While both graphs exhibit complex forms, music's complexity has a structure—it's a complex order. Noise, on the other hand, displays complex disorder.

4. **Dimensionality**: Music fills the space with a patterned growth, suggesting the layers and dimensions of harmonics and rhythms. Noise fills the space more uniformly, lacking layered depth.

TODO: In this interactive design, users could rotate the graphs, zoom in and out, and perhaps even watch the shapes evolve over time with a playback feature.

## Valence and Arousal
### Overview
In the symphony of emotions that music evokes, valence and arousal stand as the conductors, orchestrating the highs and lows, the ebbs and flows of our feelings. Our second research question probes the enigmatic alchemy of how music translates sound into sentiment, how a mere arrangement of notes can stir the soul, bringing forth smiles or summoning tears.

Valence in music refers to the spectrum of emotional positivity or negativity that a piece can convey. It's the musical whisper that hints at joy or the somber melody that speaks of sorrow. Arousal, on the other hand, is the level of energy or intensity within the music; it is the silent roar of a crescendo that quickens the heartbeat or the gentle lullaby that soothes the spirit.

This inquiry is not just an academic pursuit but a journey into the heart of human experience. It seeks to unravel the threads of melody and rhythm to understand how they weave the fabric of our emotional world. How does a major key lift our spirits while a minor key invokes introspection? What is it about the tempo that can either relax or invigorate us?

The interplay between valence and arousal in music is a dance of complexity and nuance. It is here, within the interlocking steps of harmony and beat, that music finds its voice to express the inexpressible. Our research aims to decode this language of emotions, to map the contours of how music touches the affective dimensions of our lives. Through this exploration, we hope to not only comprehend but also to appreciate the profound power of music to move us, to connect us, and to reflect the myriad hues of our inner worlds.

### Task 1
Before you stands an insightful chart labeled 'Spectral Contrast,' which measures the difference in sound intensity across the spectrum of frequencies in intense and calm music. The x-axis, spanning the length of the chart, represents the range of frequencies captured in the music, from the lowest to the highest. The y-axis measures the spectral contrast, or how much the intensity of sound varies at different frequencies.

The blue spikes represent intense music. Observe their towering presence, reaching high above the baseline, then plummeting to graze it, creating a jagged skyline of peaks and valleys. This visual volatility mirrors the audible experience of intense music—the thunderous roll of drums, the piercing cry of an electric guitar, the soaring heights of a vocalist's range—all contributing to a sense of heightened energy and emotional arousal. Such music is alive with dynamism, capturing the full spectrum of sound and often associated with powerful, positive emotions such as joy or excitement, as well as intense, negative emotions like anger or despair.

Contrasting this are the orange waves, representing calm music. Their presence is subtler, with a shorter reach both skyward and earthward from the baseline, resembling gentle rolling hills rather than rugged mountains. This pattern is indicative of the steady, soothing qualities of calm music. The gentle undulations reflect a consistent and uniform sound intensity, promoting a tranquil and serene soundscape. It's the auditory equivalent of a quiet murmur or a soft whisper, often associated with relaxed or subdued emotions, whether they be positive, like peacefulness, or negative, like melancholy.

This chart serves as a visual symphony, with each color conducting its own emotional score. As we explore the interplay between the spectral spikes of intense music and the soothing curves of calm music, we gain a deeper appreciation of how the spectral contrast in music can paint a complex picture of our emotional landscape, resonating with the depths of our feelings and the peaks of our spirits.

### Task 2
In this pair of chromagrams, we have a vivid graphical representation of how music can be dissected to reveal its harmonic and melodic DNA, elements central to expressing valence and arousal. These chromagrams categorize pitch into classes that correspond to the twelve different notes in the Western musical scale, from the deep rumble of the lowest notes to the piercing high of the top octaves.

**Understanding Chromagrams:**

A chromagram is a visual tool that maps the intensity of each of these pitch classes over time. On the horizontal axis, we have time, progressing from the start to the end of a piece. The vertical axis represents the 12 different pitch classes, with the bottom representing the note C, and moving up chromatically (in the order of keys on a piano) to B at the top. The colors range from dark to light, indicating the intensity or loudness of a particular pitch at a given time; the brighter the color, the more dominant that pitch is in the mix at that moment.

**Chromagram for Intense Sound:**

Looking at the top chromagram labeled for 'intense sound,' you'll notice sharp contrasts in color. Bright lines cut through the darkness abruptly, signifying moments where specific pitches are strikingly prominent. These sharp contrasts and sudden changes in intensity are hallmarks of music with high arousal—music that is designed to energize and stir the listener. The intensity of the bright lines correlates with the peaks in a dynamic piece of music—think of the blare of horns in a symphony or the sudden wail of a guitar solo. Such intense music often conveys high valence, whether that's the positive surge of a triumphant anthem or the negative charge of an angst-filled ballad.

**Chromagram for Calm Sound:**

Contrast this with the bottom chromagram for 'calm sound.' Here, the color transitions are much smoother, with less stark contrast and more uniformity. The persistence of a particular color suggests a pitch sustained over time, creating a sense of stability and continuity. This is characteristic of low-arousal music, which is meant to soothe and relax rather than excite. The melodic and harmonic elements are more blended and fluid, without the jarring highlights seen in the intense chromagram. This kind of music typically conveys a more neutral or negative valence, inviting introspection and calm.

**Observations from the Chromagrams:**

- **Intensity and Energy**: The top chromagram's intense energy and variability in pitch intensity can make the listener's heart race, while the bottom chromagram's steadiness can slow the heartbeat and induce relaxation.

- **Emotional Expression**: Music with greater variability in pitch intensity (top chromagram) often aligns with emotions that are high in energy and can be either positive (joy, excitement) or negative (anger, fear). In contrast, music with less variability (bottom chromagram) tends to express calmer emotions, whether positive (contentment) or negative (sadness).

- **Harmonic and Melodic Content**: The sharp edges and defined lines in the intense chromagram suggest a complex harmonic and melodic content, indicative of musical pieces with multiple layers and textures. The smoother, more homogenous calm chromagram suggests simpler harmonic content, which is common in more ambient and textural music designed to be calming.

Through these visual patterns, chromagrams provide a window into the emotional heart of music, showing us how melody and harmony intertwine to move us, to excite us, or to soothe us, and allowing even those without a musical background to 'see' the music in a new light.

## Instrumental Music
### Overview
The quest to visualize music and sound as they are manifested through physical instruments opens a fascinating chapter in the narrative of auditory experience. Our third research question invites us to explore the tangible world where sound waves are birthed, examining how the vibrations of strings, the rush of air through tubes, and the resonance within chambers become the music that stirs our souls.

This exploration is not just about understanding the mechanics of instruments but also about appreciating the alchemy that occurs when physical materials are coaxed into song. It's a journey into the anatomy of instruments, where design, structure, and material converge to create the unique voice of each musical implement.

Visualizing sound in physical instruments is akin to drawing the breath of music. It allows us to see the invisible forces at work—the frequencies resonating in a violin's body, the harmonics emanating from a piano's strings, or the rhythmic patterns captured by the membranes of drums. By rendering these vibrations visible, we can begin to comprehend how the abstractness of sound is rooted in the physical world.

This inquiry stands at the intersection of physics, engineering, and art. It marries the precision of scientific measurement with the expressiveness of musical performance. We seek to translate the ephemeral beauty of sound into forms and patterns that can be seen, understood, and appreciated, revealing the underlying principles that govern how instruments speak to us in the language of music.

Through this research, we are not just observers but participants in the unfolding drama of sound. We witness how the bow's pressure on violin strings translates into a visual display of dynamic tension, or how the strike of a hammer on a piano key is transformed into an oscillating dance of color and light. In doing so, we gain a deeper respect for the craftsmanship of instruments and a more profound understanding of the complex interplay between musician, instrument, and the music that resonates beyond the stage.

### Task 1
This visualization presents a detailed mapping of piano keystrokes over time, providing a window into the precise interplay between a pianist's touch and the resulting music. Here, we can trace the individual notes played on a piano, each represented by a unique symbol on a graph where the horizontal axis represents time and the vertical axis corresponds to the piano notes, with the lowest notes at the bottom and the highest at the top.

The variety of symbols and lines capture different aspects of piano playing:

- **Note Duration**: Lines extending horizontally represent the sustain of each note. The longer the line, the longer the note is held.
- **Note Pitch**: The vertical position of each symbol indicates the pitch of the note being played. Lower positions correspond to lower pitches (the left side of the piano keyboard), and higher positions correspond to higher pitches (the right side of the piano keyboard).
- **Note Intensity**: The different symbols can signify the intensity or velocity of the keystroke. For example, a larger symbol might indicate a stronger keystroke, resulting in a louder sound.
- **Chords and Harmony**: When multiple symbols align vertically, it indicates the simultaneous striking of multiple keys, creating chords that contribute to the harmonic structure of the piece.
- **Melody and Rhythm**: The sequence of notes and their timing relative to each other tells us about the melody and rhythm of the music. Regularly spaced symbols may indicate a steady rhythm, while varying distances can suggest changes in tempo or rhythm.

From this visualization, a student or music enthusiast can gain insights into the technical execution of a piano piece. They can observe the complexity of the music, discern patterns in the pianist's playing, and understand how different notes are woven together to create a musical tapestry. For instance, one could study the use of the sustain pedal by looking at how long notes are held, or analyze the pianist's dynamics by observing the variation in the symbols' size and shape.

Moreover, this visualization can serve as a learning tool, allowing students to compare their own playing to a target performance by visually matching their keystrokes to those displayed. It also offers composers and music theorists a way to graphically represent musical ideas and see how different elements of a piece come together over time.

Through such a detailed visual representation of piano music, we appreciate not only the auditory beauty of the piano but also the intricacy and precision involved in the artistry of playing this magnificent instrument.
