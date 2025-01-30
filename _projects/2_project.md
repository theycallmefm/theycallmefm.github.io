---
layout: page
title: RealTime Scan2CAD
description: A real-time Scan2CAD implementation using VoxelHashing
img: assets/img/scene0470_chairs.gif
importance: 1
category: work
related_publications: false
---

This project is a real-time 3D reconstruction framework that replaces an object-by CAD model in a 3D scene. It combines [end-to-end CAD model retriveal and alignment](https://arxiv.org/pdf/1906.04201) with [VoxelHashing](https://niessnerlab.org/papers/2013/4hashing/niessner2013hashing.pdf). It was done under the supervision of [Prof. Matthias Niessner](https://www.niessnerlab.org/) as part of a Guided Project for my master's studies. The code is quite old, and there may now be better methods for integrating deep learning models into real-time systems.

[Github repository](https://github.com/theycallmefm/RealTime-Scan2CAD)

<div class="row justify-content-center">
    <div class="col-md-10 col-sm-12 mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/scan2cad_input.jpg" title="input image" class="img-fluid rounded z-depth-1" style="width: 100%; max-width: 800px;" %}
    </div>
</div>
<div class="caption text-center">
    Overview of network input creation
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/scene0470_chairs.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    An example real-time scan
</div>
